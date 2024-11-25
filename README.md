#
HOW TO RUN

### set up .env
```
cp .env.example .env
```

### create database
```
createdb anime
```

### create user or use default postgres user
### in terminal
```
psql -d postgres -U postgres -W
```
### in postgres console
creating user
```
CREATE USER anime WITH PASSWORD 'anime';
```
updating database owner so that user has all the necessary permissions
```
ALTER DATABASE anime OWNER TO anime;
```
### exit postgres console
```
\q
```

### install packages
```
npm i
```

### start application
```
npm start
```



### to add new migration
```
npx sequelize-cli migration:create --name your-name
```