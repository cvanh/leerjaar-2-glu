// stolen from https://hub.qovery.com/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1/

async fn main(){
    env::set_var("RUST_LOG","actix_web=debug,actix_server=info");
    env_logger::init();

    HttpServer::new(|| {
        (App:new())
            .wrap(middleware:logger::default())
            .service(tweet::list)
            // .service(tweet::get)
            // .service(tweet::create)
            // .service(tweet::delete)
            // .service(like::list)
            // .service(like::plus_one)
            // .service(like::minus_one)

        })

        .bind("0.0.0.0:8080")
        .run()
        .await
    }