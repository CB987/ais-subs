in the terminal:
npm init -y
insert into package.json scripts:
    "reset-db": "dropdb AIS-subs; createdb AIS-subs"