# SnackerRank

| URL Route |Sub-route | Method | Function |
| --------  |--------  | ------------------- | --------------------- |
| api/auth | /register  | POST      | Register user. Returns authenticaton token to login | 
| 				 | /login  | POST    	  | Logs in as user. Returns authenticaton token to login | 
| 				 | /user  | GET      		| Displays all users | 
| 				 | /logout  | GET      | Logs out current user (Invalidates auth token) | 
| api/snack | --------  | GET | Retrieves all snacks |
|  | --------  | POST | Add new snack |
| | ?search=  | GET | Retrieves all snacks with name, description or tags |
|  |?tag=1| GET  |Retreives all snacks with tag id=1|
|  | /1  | GET | Retrieves snack where id=1 |
|  | /1  | PUT | Update infor for snack where id=1 |
|  | /1  | DELETE | Delete snack where id=1 |
| api/review | --------  | GET | Retrieve all reviews |
|  | -------- | POST | Add new review |
|  | /1  | GET | Retrieves review with id=1 |
|  | /1  | PUT | Update review with id=1 |
|  | /1  | DELETE | Delete review with id=1 |
| api/tag |--------  | GET | Retrieve all tags| 
|  | --------  | POST | Add new tag |
|  | /1  | GET | Retrieves snack where id=1 |
|  | /1  | PUT | Update infor for snack where id=1 |
|  | /1  | DELETE | Delete snack where id=1 | 