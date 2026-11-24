/*
# Create contact enquiries and newsletter subscribers tables

1. New Tables
- `contact_enquiries`: stores project enquiries submitted through the contact form.
  - `id` (uuid, primary key)
  - `full_name` (text, not null)
  - `email` (text, not null)
  - `phone` (text, optional)
  - `company_name` (text, optional)
  - `service_required` (text, optional)
  - `project_budget` (text, optional)
  - `project_description` (text, not null)
  - `created_at` (timestamp, defaults to now)
- `newsletter_subscribers`: stores email addresses from the footer newsletter form.
  - `id` (uuid, primary key)
  - `email` (text, unique, not null)
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on both tables.
- No sign-in exists on this website, so policies target `anon, authenticated`.
- Visitors may INSERT only; there is intentionally no SELECT/UPDATE/DELETE policy,
  so submitted enquiries cannot be read, changed, or removed through the public API.
- Grant INSERT to `anon` + `authenticated` (no other verbs granted).

3. Notes
- Both forms are front-end validated before insert; the database stores the raw
  submission for the agency to review.
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  service_required text,
  project_budget text,
  project_description text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_enquiries TO anon, authenticated;
GRANT INSERT ON newsletter_subscribers TO anon, authenticated;

DROP POLICY IF EXISTS "Anyone can submit a contact enquiry" ON contact_enquiries;
CREATE POLICY "Anyone can submit a contact enquiry"
ON contact_enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can subscribe to the newsletter" ON newsletter_subscribers;
CREATE POLICY "Anyone can subscribe to the newsletter"
ON newsletter_subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (true);
