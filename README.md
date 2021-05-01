# SnackerRank

| URL Route |Sub-route | Method | Function |
| --------  |--------  | ------------------- | --------------------- |
| api/auth | /register  | POST      | Register user. Returns authenticaton token to login | 
| 				 | /login  | POST    	  | Logs in as user. Returns authenticaton token to login | 
| 				 | /user  | GET      		| Displays all users | 
| 				 | /logout  | GET      | Logs out current user (Invalidates auth token) | 
| api/snack | --------  | GET | Retrieves all snacks |
|  | --------  | POST | Add new snack |
| | ?name=  | GET | Retrieves all snacks with name |
|  |?tag=| GET  |Retreives all snacks with tag|
|  | /1  | GET | Retrieves snack where id=1 |
|  | /1  | PUT | Update infor for snack where id=1 |
|  | /1  | DELETE | Delete snack where id=1 |
|  | /1/review  | POST | Add new review for snack with id=1 |
|  | /1/review?id=  | GET | Retrieves review with id= for snack id=1 |
|  | /1/review?id=  | PUT | Update review with id= for snack id=1 |
|  | /1/review?id=  | DELETE | Delete review with id= for snack id=1 |
| api/tag |--------  | GET,POST etc | Standard functions for getting, adding, editing and deleting tags| 
| api/user |--------  | GET,POST etc| Info on users; typically won't need editing due to /auth/ | 