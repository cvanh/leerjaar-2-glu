#[macro_use] extern crate rocket;

// routes
#[get("/<name>")]
async fn index(name: &str) -> String {
    format!("Hello {} welcome to this world!", &name)
}


// bullshit for setting stuff up
#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}