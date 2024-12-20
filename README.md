**Presidential Voting System**
The **Presidential Voting System** is a web-based platform designed to facilitate secure and efficient voting for presidential candidates. This application ensures voter authentication, seamless navigation, and real-time analytics, making it a robust solution for modern voting systems.


**Features**
1. **Authentication System**:
   - Users are required to log in or sign up before accessing voting features.
   - Protected routes ensure only authenticated users can access sensitive pages like the Presidential Voting Dashboard.

2. **Voting Dashboard**:
   - Displays candidates and allows users to cast their votes.
   - Real-time analytics show the number of votes each candidate has received.

3. **How-to-Vote Guide**:
   - A guide page explaining the steps to participate in the voting process.

4. **Responsive Design**:
   - Optimized for various screen sizes, ensuring accessibility on desktops, tablets, and mobile devices.

5. **Dropdown Navigation**:
   - A user-friendly sidebar with dropdown menus for navigating executive positions and related pages.
     

**Technologies Used**

1. **Frontend**:
   - **React.js**: For building dynamic and responsive user interfaces.
   - **React Router**: For managing routes and enabling navigation between pages.
   - **CSS**: For styling components and ensuring a consistent design.
   
2. **Backend**:
   - **Supabase**: For authentication, user management, and real-time database services.
   
3. **Version Control**:
   - **Git & GitHub**: For managing the project repository and collaborating on code.


**How It Works**
 
1. **Authentication**:
   - New users can sign up, while existing users can log in using their credentials.
   - Upon successful login, users are redirected to the voting dashboard.

2. **Protected Routes**:
   - Certain routes, such as the Presidential Voting Dashboard, are only accessible to logged-in users. Unauthenticated users are redirected to the login page.

3. **Voting Process**:
   - Authenticated users can view the list of presidential candidates and cast their votes.
   - Votes are tracked and displayed on a chart or dashboard in real-time.

4. **Sidebar Navigation**:
   - A dropdown menu in the sidebar allows users to explore pages like "How to Vote" and the "Presidential Voting Dashboard."
   - Links dynamically adjust based on the user's authentication status.

### **Future Improvements**
- Adding support for other executive positions (e.g., gubernatorial voting).
- Enhancing the analytics dashboard with more interactive visualizations.
- Implementing secure vote encryption to ensure data integrity.

