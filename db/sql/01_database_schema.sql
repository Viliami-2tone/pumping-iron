BEGIN TRANSACTION;

CREATE TABLE lifter (
    id SERIAL PRIMARY KEY,
    first_name text,
    last_name text,
    is_pro_member boolean DEFAULT false
);

CREATE TABLE body_part (
    id SERIAL PRIMARY KEY,
    name TEXT
);
CREATE TABLE exercise (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE exercise_body_part (
    body_part_id int REFERENCES body_part(id),
    exercise_id int REFERENCES exercise(id),
    PRIMARY KEY(body_part_id, exercise_id)
);

CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    pumped_at TIMESTAMP,
    lifter_id int REFERENCES lifter(id)
);

CREATE TABLE weight_set (
    id SERIAL PRIMARY KEY,
    workout_id int REFERENCES workout(id),
    exercise_id int REFERENCES exercise(id),
    num_reps int,
    weight_kg decimal
);



COMMIT;