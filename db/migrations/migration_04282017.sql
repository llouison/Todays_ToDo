-- creating the todo table in the todo sql database
\connect todo_development

CREATE TABLE IF NOT EXISTS todo (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1024),
  category VARCHAR(255),
  status VARCHAR(255)
);