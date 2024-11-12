# Authentication Application

This application provides a secure authentication system with user registration, login, password management, and differentiated access levels for normal users and admins. Users and admins have different permissions regarding image viewing, uploading, and deletion.

## Features

- **User Registration**: Allows new users to sign up with credentials.
- **User Login**: Registered users can log in to access protected routes.
- **Password Management**: Logged-in users can securely change their password.
- **Role-Based Access Control**:
  - **Admin**:
    - Can upload images.
    - Can delete only the images they have uploaded (cannot delete images uploaded by other admins).
  - **Normal User**:
    - Can view images but cannot upload or delete them.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Swarnavo2003/node-auth.git
