export async function signUp(credentials) {
  // Ensure you use the correct variable name
  const response = await fetch(`http://localhost:3577/api/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function login(credentials) {
  const response = await fetch("http://localhost:3577/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function getNotes(userId) {
  try {
    const response = await fetch(
      `http://localhost:3577/api/notes/?userId=${userId}`,
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
export async function createNote(note) {
  // Ensure you use the correct variable name
  const response = await fetch(`http://localhost:3577/api/notes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  return response.json();
}

export async function deleteNote({ userId: userId, noteId: noteId }) {
  try {
    const response = await fetch(
      `http://localhost:3577/api/notes/?userId=${userId}&noteId=${noteId}`,
      {
        method: "DELETE",
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
export async function updateNoteStatus({
  noteId: noteId,
  userId: userId,
  stati: newStatus,
}) {
  try {
    const response = await fetch(`http://localhost:3577/api/notes/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noteId: noteId,
        userId: userId,
        stati: newStatus,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Could not update note status: ", error);
    return null;
  }
}
