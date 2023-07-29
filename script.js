// Example data for dynamic courses
const coursesData = [
  { name: "Introduction to DevOps", date: "2023-08-15", instructor: "Pramod" },
  { name: "Advanced DevOps Practices", date: "2023-09-10", instructor: "Naveen" },
  // Add more courses here...
];

// Function to display courses dynamically
function displayCourses() {
  const coursesList = document.getElementById("courses-list");
  let coursesHTML = "";

  coursesData.forEach(course => {
    coursesHTML += `<li>${course.name} | Date: ${course.date} | Instructor: ${course.instructor}</li>`;
  });

  coursesList.innerHTML = coursesHTML;
}

// Call the function when the page loads
window.onload = displayCourses;
