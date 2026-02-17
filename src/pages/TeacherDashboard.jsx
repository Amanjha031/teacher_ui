import { MdExpandMore } from "react-icons/md";
import "../styles/dashboard.css";
import SubHeaderNav from "../components/SubHeaderNav";
import { useState } from "react";
import LiveSessionCard from "../components/LiveSessionCard";
import CalendarWidget from "../components/CalendarWidget";
import AssignmentItem from "../components/AssignmentItem";
import QuizItem from "../components/QuizItem";
import NotificationItem from "../components/NotificationItem";
import ActivityItem from "../components/ActivityItem";

export default function TeacherDashboard() {

  const [activeSection, setActiveSection] = useState("Upcoming Live Sessions");

  return (
    <div className="dashboard">

      <SubHeaderNav
        sections={[
  "Upcoming Live Sessions",
  "Calendar",
  "Assignment",
  "Quiz",
  "Notification",
  "Activity"
]}

        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Desktop View */}
      <div className="desktop-view">

        {/*  top row */}
        <div className="dash-top">
          <div className="dash-live-section">
            <h3 className="dash-section-title">
              Upcoming Live Sessions
            </h3>

            <div className="dash-live-row">
              <LiveSessionCard
                subject="Subject Name"
                topic="This Topic"
                startsIn="Time:"
                timing="Session Timing"
              />
              <LiveSessionCard
                subject="Biology 101"
                topic="Introduction to Genetics"
                startsIn="15min/1day"
                timing="10:00 AM - 11:30 AM"
              />
              <LiveSessionCard
                subject="Art History"
                topic="Introduction to Modernism"
                startsIn="30 min"
                timing="1:00 PM - 2:30 PM"
              />
            </div>
          </div>

          <CalendarWidget />
        </div>

        {/* bottom row*/}
        <div className="dash-bottom">

          <div className="dash-left-col">

            {/* Assignment */}
            <div className="dash-card">
              <div className="dash-card-header">
                <h4>Assignment</h4>
                <MdExpandMore className="dash-chevron" />
              </div>
              <div className="dash-card-body">
                <AssignmentItem type="danger" />
                <AssignmentItem type="danger" />
                <AssignmentItem type="warning" />
                <AssignmentItem type="warning" />
                <AssignmentItem type="success" />
              </div>
            </div>

            {/* Quiz */}
            <div className="dash-card">
              <div className="dash-card-header">
                <h4>Quiz</h4>
                <MdExpandMore className="dash-chevron" />
              </div>
              <div className="dash-card-body">
                <QuizItem type="danger" />
                <QuizItem type="warning" />
                <QuizItem type="success" />
              </div>
            </div>

          </div>

          {/* Notification */}
          <div className="dash-card dash-notif-card">
            <div className="dash-card-header">
              <h4>Notification</h4>
              <select className="dash-filter">
                <option>All</option>
              </select>
            </div>

            <div className="dash-card-body">
              <NotificationItem
                title="New Assignment Updated"
                barColor="green"
                lines={[
                  "Subject Name: Topic/Title",
                  "Teacher: Teacher's Name",
                  "Due Date: 20 Feb 26 (Friday)"
                ]}
              />
              <NotificationItem
                title="New Live Session Updated"
                barColor="teal"
                lines={[
                  "Subject Name",
                  "Teacher: Teacher's Name",
                  "20 Feb 26 (Friday)",
                  "10:00 AM - 11:30 AM"
                ]}
              />
              <NotificationItem
                title="New Assignment Updated"
                barColor="red"
                lines={[
                  "Subject Name: Topic/Title",
                  "Teacher: Teacher's Name",
                  "Due Date: 20 Feb 26 (Friday)"
                ]}
              />
              <NotificationItem
                title="New Quiz Updated"
                barColor="purple"
                lines={[
                  "Subject Name: Topic/Title",
                  "Teacher: Teacher's Name",
                  "Due Date: 20 Feb 26 (Friday)"
                ]}
              />
            </div>
          </div>

          {/* Activity */}
          <div className="dash-card dash-activity-card">
            <div className="dash-card-header">
              <h4>8 Jan 2026</h4>
              <select className="dash-filter">
                <option>All</option>
              </select>
            </div>

            <div className="dash-card-body">
              <ActivityItem
                date="21/01/2026 (Wed)"
                label="Live Session"
                labelColor="teal"
                lines={[
                  "Mathematics chapter 1: algebra",
                  "Teacher: Sir Zothana",
                  "Time: 1:00pm to 2:00pm"
                ]}
              />
              <ActivityItem
                date="21/01/2026 (Wed)"
                label="Due Assignment"
                labelColor="yellow"
                lines={[
                  "Mathematics chapter 1: algebra",
                  "Teacher: Sir Zothana"
                ]}
              />
              <ActivityItem
                date="21/01/2026 (Wed)"
                label="Quiz"
                labelColor="purple"
                lines={[
                  "Science: chapter 1: Chemistry",
                  "Teacher: Sir Rasta",
                  "Due Date: 23/01/26 (Friday)"
                ]}
              />
            </div>
          </div>

        </div>
      </div>

      {/* mobile view */}
      <div className="mobile-view">

       {activeSection === "Upcoming Live Sessions" && (
  <div className="dash-top">
    <div className="dash-live-section">
      <h3 className="dash-section-title">
        Upcoming Live Sessions
      </h3>

      <div className="dash-live-row">
        <LiveSessionCard
          subject="Subject Name"
          topic="This Topic"
          startsIn="Time:"
          timing="Session Timing"
        />
        <LiveSessionCard
          subject="Biology 101"
          topic="Introduction to Genetics"
          startsIn="15min/1day"
          timing="10:00 AM - 11:30 AM"
        />
        <LiveSessionCard
          subject="Art History"
          topic="Introduction to Modernism"
          startsIn="30 min"
          timing="1:00 PM - 2:30 PM"
        />
      </div>
    </div>
  </div>
)}

{activeSection === "Calendar" && (
  <div className="dash-card">
    <CalendarWidget />
  </div>
)}


        {activeSection === "Assignment" && (
          <div className="dash-left-col">
            <div className="dash-card">
              <div className="dash-card-header">
                <h4>Assignment</h4>
              </div>
              <div className="dash-card-body">
                <AssignmentItem type="danger" />
                <AssignmentItem type="danger" />
                <AssignmentItem type="warning" />
                <AssignmentItem type="warning" />
                <AssignmentItem type="success" />
              </div>
            </div>
          </div>
        )}

        {activeSection === "Quiz" && (
          <div className="dash-left-col">
            <div className="dash-card">
              <div className="dash-card-header">
                <h4>Quiz</h4>
              </div>
              <div className="dash-card-body">
                <QuizItem type="danger" />
                <QuizItem type="warning" />
                <QuizItem type="success" />
              </div>
            </div>
          </div>
        )}

        {activeSection === "Notification" && (
          <div className="dash-card dash-notif-card">
            <div className="dash-card-header">
              <h4>Notification</h4>
            </div>
            <div className="dash-card-body">
              <NotificationItem
                title="New Assignment Updated"
                barColor="green"
                lines={[
                  "Subject Name: Topic/Title",
                  "Teacher: Teacher's Name",
                  "Due Date: 20 Feb 26 (Friday)"
                ]}
              />
            </div>
          </div>
        )}

        {activeSection === "Activity" && (
          <div className="dash-card dash-activity-card">
            <div className="dash-card-header">
              <h4>8 Jan 2026</h4>
            </div>
            <div className="dash-card-body">
              <ActivityItem
                date="21/01/2026 (Wed)"
                label="Live Session"
                labelColor="teal"
                lines={[
                  "Mathematics chapter 1: algebra",
                  "Teacher: Sir Zothana",
                  "Time: 1:00pm to 2:00pm"
                ]}
              />
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
