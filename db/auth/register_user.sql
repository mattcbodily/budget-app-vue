insert into budget_user (
    first_name,
    last_name,
    email,
    password
) values (
    ${firstName},
    ${lastName},
    ${email},
    ${hash}
);