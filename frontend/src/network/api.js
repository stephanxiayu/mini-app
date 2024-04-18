export async function signUp(credentials) {
  // Ensure you use the correct variable name
  const response = await fetch(`http://localhost:3755/api/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function login(credentials) {
  const response = await fetch("http://localhost:3755/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function getNotes(userId) {
  try {
    const response = await fetch(
      `http://localhost:3755/api/notes/?userId=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Could not fetch notes: ", error);

    return [];
  }
}
