# Development Guidelines (In Progress)

## 1. Project Initiation
---
```bash
# Change example.env to .env
mv example.env .env

# Install packages
npm install

# Create database
sequelize db:create

# Migrating the tables into database
sequelize db:migrate

# Seeding the default data
sequelize db:seed:all

# Run the dev script
npm run dev
```

## 2. Project Structure
---
```bash
├── config
|   ├── config.js
├── controllers
|   ├── feature-nameController.js
├── middlewares
|   ├── middleware-name.js
├── migrations
├── models
|   ├── model-name.js
├── routes
|   ├── route-nameRoute.js
├── views
|   ├── view-name.ejs
├── .env
├── index.js
├── package.json
```

## 3. API Specification
---
### <strong>Users Feature</strong>

> POST `/register`

Create a new user.

* Request Body
```json
{
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "password": "string",
    "confirm_password": "string",
    "phone": "string"
}
```

* Response (Success)
```json
{
    "status": 201,
    "message": "User registered successfully.",
    "data":
    [
        {
            "id": "string",
            "first_name": "string",
            "last_name": "string",
            "email": "string",

        }
    ]
}
```

* Response (Fail)
```json
{
    "status": 400,
    "message": "One or more error have occurred.",
    "errors":
    [
        "The email must be a valid email address."
        "The email already registered.",
        "The password must have at least 8 characters",
        "Confirm password doesn't match"
    ]
}
```

> POST `/login`

Authenticate a user.

* Request Body
```json
{
    "email": "string",
    "password": "string"
}
```

* Response (Success)
```json
{
    "status": 200,
    "message": "Login sucessfully.",
    "data":
    [
        {
            "id": "string",
            "token": "string"
        }
    ]
}
```

* Response (Fail)

```json
{
    "status": 400,
    "message": "One or more error have occurred.",
    "data":
    [
        "Incorrect email or password."
    ]
}
```

> GET `users/profile/{users_id}`

Read user profile.

* Response

```json
{
    "status": 200,
    "message": "Success.",
    "data":
    [
        {
            "id": "string",
            "first_name": "string",
            "last_name": "string",
            "phone": "string",
            "company_organization": "string",
            "address": "string",
            "profile_picture": "string"
        }
    ]
}
```

> PUT `users/profile/{id_users}`

Update user profile.

### <strong>Events Feature</strong>

> POST `users/profile/{id_users}/events`

Create an event.

> GET `users/profile/{id_users}/history`

List all recent events by user id.

> GET `/events`

List all events.

> GET `/events/{id_events}`

Get event by id.

> GET `/events/{name_categories}`

List all events with specific category.

> GET `/events?status={2}`

List all incoming events.

> GET `/events?status={3}`

List all ongoing events.

### <strong>Event Payments</strong>

> GET `admin/events/payments`

List all event payments.

> GET `admin/events/payments/{id_event_payments}`

Get event payment details.

> PUT `admin/events/{id_events}`

Update event status.

### <strong>Ticket Paymets</strong>

> POST `events/{id_events}`

Create ticket payment.

> GET `events/{id_events}/{id_ticket_payment}`

Get ticket payment by id.

### <strong>Roles Feature</strong>

> GET `/roles`

List all roles.

* Response
```json
{
    "status": 200,
    "message": "Success",
    "data":
    [
        {
            "id": "string(21)",
            "name": "string",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            "id": "string(21)",
            "name": "string",
            "createdAt": "date",
            "updatedAt": "date"
        }
    ]
}
```

> POST `/roles`

Create new role.

* Request Body:
```json
{
    "name": "string"
}
```
* Response:
```json
{
    "status": 201,
    "message": "Role created successfully.",
    "data":
    [
        {
            "id": "string(21)",
            "name": "string",
            "createdAt": "date",
            "updatedAt": "date"
        }
    ]
}
```
> PUT `/roles/{id_roles}`

Update role detail.

> DELETE `/roles/{id_roles}`

Delete role detail.

### <strong>Categories Feature</strong>

> GET `/categories`

List all categories.

> PUT `/categories/{id_categories}`

Update category detail.

> DELETE `/categories/{id_categories}`

Delete category detail.

---


## RESTful API
- Response without returning data (Success)
```json
{
    "status": 200,
    "message": "Profile edited successfully."
}
```

- Response with returning data (Success).
```json
{
    "status": 200,
    "message": "Success.",
    "data":
    [
        {
            "id": "2Vk8Bf83wB7gGvdrA4eNX",
            "name": "Admin",
            "createdAt": "2021-02-28T08:21:52.871Z",
            "updatedAt": "2021-02-28T08:21:52.871Z"
        }
    ]
}
```

- Response with returning multiple data (Success).
```json
{
    "status": 200,
    "message": "Success.",
    "data":
    [
        {
            "id": "2Vk8Bf83wB7gGvdrA4eNX",
            "name": "Admin",
            "createdAt": "2021-02-28T08:21:52.871Z",
            "updatedAt": "2021-02-28T08:21:52.871Z"
        },
        {
            "id": "NwvgH-NHWZvusKHojtWWP",
            "name": "Organizer",
            "createdAt": "2021-02-28T08:21:52.871Z",
            "updatedAt": "2021-02-28T08:21:52.871Z"
        },
        {
            "id": "lfaIMm_20ca-OVQuBbLUA",
            "name": "User",
            "createdAt": "2021-02-28T08:21:52.871Z",
            "updatedAt": "2021-02-28T08:21:52.871Z"   
        }
    ]
}
```

- Response without returning data (Fail)
```json
{
    "status": 400,
    "message": "Wrong email or password."
}
```

- Response with multiple error message (Fail)
```json
{
    "status": 400,
    "message": "Errors have occured.",
    "errors":
    [
        "The email must be a valid email",
        "The password must be at least 8 characters"
    ]
}
