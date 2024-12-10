export default function PostList(){
const people=[
{
    id:1,
    Name:"Marco",
    Age:17,
    Nationality:"italian",
    gender:"male"
},
{
    id:2,
    Name:"Giorgio",
    Age:21,
    Nationality:"Italian",
    gender:"male"
},
{
    id:3,
    Name:"Alessio",
    Age:19,
    Nationality:"Romanian",
    gender:"male"
},
{
    id:4,
    Name:"Martina",
    Age:18,
    Nationality:"Spanish",
    gender:"female"
},
]

return(
    <div className="container">
    <h1>POST:</h1>
    <div>
      {people.map((person) => (
        <div key={person.id} className="py-2">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-text">{person.Name}</h1>
              <p className="card-text">{person.gender}</p>
              <p className="card-text">{person.Age}</p>
              <p className="card-text">{person.Nationality}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}4