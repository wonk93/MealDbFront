import React, { useEffect, useState } from "react";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from an API
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user");
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Add a loading state while fetching data
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <img src={user.profilePicture} alt="Profile" />
      <p>{user.bio}</p>
      {/* Display other user information */}
    </div>
  );
}

export default ProfilePage;
