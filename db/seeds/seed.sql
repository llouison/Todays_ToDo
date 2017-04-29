-- creating database
DROP DATABASE IF EXISTS todo_development;
CREATE DATABASE todo_development;
-- connecting to database
\connect todo_development;
-- importing todo sql information
\i todo.sql;