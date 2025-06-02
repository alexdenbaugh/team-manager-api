# Team Manager API Documentation

## Table of Contents
- [Users](#users)
  - [GET `/users`](#get-users)
  - [POST `/users`](#post-users)
- [Teams](#teams)
  - [GET `/teams`](#get-teams)
  - [POST `/teams`](#post-teams)
  - [GET `/teams/:id/users`](#get-teamsidusers)
  - [POST `/teams/:id/users/:userId`](#post-teamsidusersuserid)
- [Error Responses](#error-responses)

## Users

### GET `/users`
Get all users.

```
GET http://localhost:3000/users
```

**Response (200)**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-03-20T00:00:00.000Z"
  }
]
```

**Error Responses**
- **500** - Server error

### POST `/users`
Create a new user.

```
POST http://localhost:3000/users
```

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response (201)**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-03-20T00:00:00.000Z"
}
```

**Error Responses**
- **400** - Missing required fields (name or email)
- **400** - Invalid email format
- **409** - Email already exists
- **500** - Server error

## Teams

### GET `/teams`
Get all teams.

```
GET http://localhost:3000/teams
```

**Response (200)**
```json
[
  {
    "id": 1,
    "name": "Engineering"
  }
]
```

**Error Responses**
- **500** - Server error

### POST `/teams`
Create a new team.

```
POST http://localhost:3000/teams
```

**Request Body**
```json
{
  "name": "Engineering"
}
```

**Response (201)**
```json
{
  "id": 1,
  "name": "Engineering"
}
```

**Error Responses**
- **400** - Missing required field (name)
- **500** - Server error

### GET `/teams/:id/users`
Get all users in a team.

```
GET http://localhost:3000/teams/1/users
```

**Response (200)**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-03-20T00:00:00.000Z"
  }
]
```

**Error Responses**
- **400** - Invalid team ID format
- **404** - Team not found
- **500** - Server error

### POST `/teams/:id/users/:userId`
Add a user to a team.

```
POST http://localhost:3000/teams/1/users/2
```

**Response (201)**
```json
{
  "userId": 2,
  "teamId": 1
}
```

**Error Responses**
- **400** - Invalid team ID or user ID format
- **404** - Team not found
- **404** - User not found
- **409** - User already in team
- **500** - Server error

## Error Responses

All endpoints can return error responses in this format:

```json
{
  "error": "Error message here"
}
```

Common HTTP Status Codes:
- **400** Bad Request - Invalid input or missing required fields
- **404** Not Found - Requested resource doesn't exist
- **409** Conflict - Resource already exists or conflict with existing data
- **500** Server Error - Unexpected server error 
 