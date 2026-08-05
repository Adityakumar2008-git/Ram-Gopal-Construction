# Form Requirements

Project: Ram Gopal Constructions
Version: 1.0

---

# Overview

The website includes a single lead generation form.

Purpose:

- Collect customer inquiries
- Generate construction leads
- Generate interior work leads
- Generate marble & tile work leads
- Generate property consultation leads

No user registration.

No login.

No customer dashboard.

No property submission system.

---

# Contact Form

## Fields

### Full Name

Type

Text

Required

Yes

Placeholder

Enter your full name

Maximum Length

100 Characters

---

### Mobile Number

Type

Tel

Required

Yes

Placeholder

Enter your mobile number

Validation

Indian mobile number only

Example

9876543210

---

### Email Address

Type

Email

Required

Optional

Placeholder

Enter your email address

Validation

Valid email format

---

### Service Required

Type

Dropdown

Required

Yes

Options

Residential Construction

Commercial Construction

Interior Design

Marble Installation

Tile Installation

Renovation

Property Buying

Property Selling

Property Renting

Property Consultation

Other

---

### Property / Project Location

Type

Text

Required

Optional

Placeholder

Enter project or property location

---

### Budget Range

Type

Dropdown

Required

Optional

Options

Below ₹5 Lakh

₹5–10 Lakh

₹10–25 Lakh

₹25–50 Lakh

Above ₹50 Lakh

Not Sure Yet

---

### Message

Type

Textarea

Required

Yes

Placeholder

Describe your requirement.

Maximum Length

1000 Characters

---

# Submit Button

Label

Get Free Quote

---

# Validation Rules

Full Name

Minimum 3 characters

Maximum 100 characters

---

Mobile Number

10 digits

Indian format

Numbers only

---

Email

Valid email format

---

Message

Minimum 10 characters

Maximum 1000 characters

---

# Successful Submission

Display a success message.

Example

Thank you for contacting Ram Gopal Constructions.

Our team will contact you shortly.

---

# Error Message

Example

Something went wrong.

Please try again.

---

# Spam Protection

Basic frontend validation

Rate limiting (future enhancement)

Google reCAPTCHA (future enhancement)

---

# Form Submission

Current Version

The form should send inquiries to the business email using EmailJS or a similar client-side email service.

Future Upgrade

Store inquiries in a database with an admin dashboard.

---

# Notification

Business receives

Customer Name

Phone Number

Email

Selected Service

Location

Budget

Message

---

# Future Features

Not included in Version 1.0

Property Submission Form

Admin Panel

Customer Dashboard

Lead Management

CRM Integration

WhatsApp API Integration

Lead Analytics

Automatic Follow-up Emails

-------------------------------------------------

END OF DOCUMENT