$.ajax({
  method: "POST",
  path: "/api/users",
  data: {
    "firstName": "Nathan",
    "lastName": "Reitan",
    "cohort": "c02.20",
  },
  headers: none,
  response 201 Created:
  {
    "message": "User for Nathan Reitan created.  Write down your API Key, you will need it for the rest of this project.",
    "apiKey": "E6uia4wz"
  }
})
