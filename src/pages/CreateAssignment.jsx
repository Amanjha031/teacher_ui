import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import "../styles/create-assignment.css";

const makeQ = (q = "", a = "") => ({
  id: crypto.randomUUID(),
  question: q,
  answer: a,
});

export default function CreateAssignment() {
  const navigate = useNavigate();
  const { state: editData } = useLocation();

  const [title, setTitle] = useState(editData?.title || "");
  const [dueDate, setDueDate] = useState(editData?.dueDate || "");

  // Questions state
  const [questions, setQuestions] = useState(() => {
    if (editData?.questions?.length) {
      return editData.questions.map((x) =>
        makeQ(x.question || "", x.answer || "")
      );
    }
    return [makeQ()];
  });

  const [errors, setErrors] = useState({});
  const isEditing = !!editData?.title;

  const addQuestion = () => setQuestions((prev) => [...prev, makeQ()]);

  const removeQuestion = (id) =>
    setQuestions((prev) =>
      prev.length === 1 ? prev : prev.filter((q) => q.id !== id)
    );

  const updateQuestion = (id, key, value) =>
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [key]: value } : q))
    );

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!dueDate) newErrors.dueDate = "Due date is required";

    const hasQuestion = questions.some((q) => q.question.trim());
    if (!hasQuestion) newErrors.questions = "Add at least 1 question";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const autoGrow = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSave = () => {
    if (!validate()) return;

    const assignmentData = {
      title,
      dateIssued: new Date().toISOString(),
      dueDate,
      questions: questions.map((q) => ({
        question: q.question,
        answer: q.answer,
      })),
    };

    const saved = JSON.parse(localStorage.getItem("assignments") || "[]");

    if (isEditing) {
      const idx = saved.findIndex((a) => a.title === editData.title);
      if (idx !== -1) saved[idx] = assignmentData;
      else saved.push(assignmentData);
    } else {
      saved.push(assignmentData);
    }

    localStorage.setItem("assignments", JSON.stringify(saved));

    navigate("/teacher/classes/assignments/view", {
      state: assignmentData,
    });
  };

  return (
    <div className="create-assignment-page ca-page-fixed">
      {/* Top Bar */}
      <div className="ca-topbar">
        <button
          className="ca-top-back"
          onClick={() => navigate(-1)}
          type="button"
        >
          <IoChevronBack /> Back
        </button>

        <button className="ca-top-save" onClick={handleSave} type="button">
          {isEditing ? "Update" : "Save"}
        </button>
      </div>

      {/* Scroll Area */}
      <div className="ca-scroll">
        <div className="ca-shell">
          <h2 className="ca-page-title">Create Assignment</h2>

          {/* Title + Due Date Row */}
          <div className="ca-row">
            <div className="ca-field">
              <label className="ca-label">Assignment Title</label>
              <input
                type="text"
                className={`ca-input ${errors.title ? "ca-input-error" : ""}`}
                placeholder="e.g.  New Assignment Questions"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && (
                <span className="ca-error">{errors.title}</span>
              )}
            </div>

            <div className="ca-field">
              <label className="ca-label">Due Date</label>
              <div className="ca-date-wrapper">
                <span
                  className={`ca-date-display ${
                    errors.dueDate ? "ca-input-error" : ""
                  }`}
                >
                  {dueDate ? formatDate(dueDate) : "Select date"}
                </span>

                <div className="ca-date-icon-wrapper">
                  <FiCalendar className="ca-date-icon" />
                  <input
                    type="date"
                    className="ca-date-input"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </div>
              {errors.dueDate && (
                <span className="ca-error">{errors.dueDate}</span>
              )}
            </div>
          </div>

          {/* Questions Section */}
          <div className="ca-questions-block">
            <h3 className="ca-questions-title">Questions</h3>

            {errors.questions && (
              <span className="ca-error">{errors.questions}</span>
            )}

            <div className="ca-q-list">
              {questions.map((q, idx) => (
                <div className="ca-q-card" key={q.id}>
                  <div className="ca-q-top">
                    <div className="ca-q-badge">Q{idx + 1}</div>

                    <input
                      className="ca-q-input"
                      value={q.question}
                      onChange={(e) =>
                        updateQuestion(q.id, "question", e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addQuestion();
                        }
                      }}
                      placeholder="Type your question..."
                    />

                    <button
                      type="button"
                      className="ca-q-remove"
                      onClick={() => removeQuestion(q.id)}
                      disabled={questions.length === 1}
                    >
                      ✕
                    </button>
                  </div>

                  <textarea
                    className="ca-ans-textarea"
                    value={q.answer}
                    onChange={(e) =>
                      updateQuestion(q.id, "answer", e.target.value)
                    }
                    onInput={autoGrow}
                    rows={3}
                    placeholder="Answer (blank). Long answer allowed..."
                  />
                </div>
              ))}
            </div>

            <div className="ca-add-more-wrap">
              <button
                type="button"
                className="ca-add-more-btn"
                onClick={addQuestion}
              >
                + Add More
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}