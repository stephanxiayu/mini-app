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
