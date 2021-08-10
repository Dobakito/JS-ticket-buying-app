# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.create(name: 'EDM')
Genre.create(name: 'Rap')
Genre.create(name: 'Country')
Genre.create(name: 'Pop')

Show.create([{artist: 'Skrillex', venue: 'Nashville Underground', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/skrillex_logo.jpg', tickets_left: 12, genre_id: 1, date: '08/31/21'},
{ artist: 'INZO', venue: '6th & Peabody', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/inzo_logo.jpg', tickets_left: 96, genre_id: 1, date: '09/08/21'},
{ artist: 'Zeds Dead', venue: 'Marathon Music Works', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/zeds_dead_logo.jpg', tickets_left: 24, genre_id: 1, date: '09/19/21'},
{ artist: 'Seven Lions', venue: 'Bicentennial Park', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/seven_lions_logo.jpg', tickets_left: 44, genre_id: 1, date: '10/1/21'},
{ artist: 'Swedish House Mafia', venue: 'First Horizon Park', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/SHM_logo.jpeg', tickets_left: 52, genre_id: 1, date: '10/6/21'},
{ artist: 'Tchami', venue: 'Marathon Music Works', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/tchami_logo.jpg', tickets_left: 63, genre_id: 1, date: '10/31/21'},
{ artist: 'Martin Garrix', venue: 'Nasvhille Underground', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/Martin_garrix_logo.jpg', tickets_left: 34, genre_id: 1, date: '11/14/21'},
{ artist: 'Alesso', venue: '6th & Peabody', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/EDM/alesso_logo.png', tickets_left: 85, genre_id: 1, date: '12/31/21'}])

Show.create([{artist: 'Drake', venue: '1st and Broadway', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/Rap/Drake.jpg', tickets_left: 36, genre_id: 2, date: '08/15/21'},
{ artist: 'Kendrick Lamar', venue: 'Marathon Music Works', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/Rap/kendrick-lamar.jpg', tickets_left: 32, genre_id: 2, date: '09/11/21'},
{ artist: 'J Cole', venue: 'Nashville Underground', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/Rap/j-cole.jpg', tickets_left: 45, genre_id: 2, date: '09/16/21'},
{ artist: 'A$AP Rocky', venue: 'Ascend Ampetheatre', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/Rap/asap_rocky.jpeg.webp', tickets_left: 62, genre_id: 2, date: '10/12/21'},
{ artist: 'Post Malone', venue: 'Marathon Music Works', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/Rap/post-malone.jpg', tickets_left: 38, genre_id: 2, date: '10/28/21'}])

Show.create([{artist: 'Kenny Chesney', venue: '1st and Broadway', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/country/kenny+chesney.jpg', tickets_left: 36, genre_id: 3, date: '08/25/21'},
{ artist: 'Tyler Childers', venue: 'Marathon Music Works', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/country/tyler-childers.jpg', tickets_left: 32, genre_id: 3, date: '09/13/21'},
{ artist: 'Florida Georgia Line', venue: 'Nashville Underground', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/country/FGL.jpg', tickets_left: 45, genre_id: 3, date: '09/19/21'},
{ artist: 'Luke Bryan', venue: "Johnny Cash's Saloon", image: 'https://artistphotos.s3.us-east-2.amazonaws.com/country/luke+bryan.jp2', tickets_left: 38, genre_id: 3, date: '10/14/21'}])

Show.create([{artist: 'Dua Lipa', venue: '1st and Broadway', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/pop/Dua_Lipa.jpg', tickets_left: 33, genre_id: 4, date: '08/25/21'},
{ artist: 'CHVRCHES', venue: 'Marathon Music Works', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/pop/Chvrches.jpg', tickets_left: 39, genre_id: 4, date: '09/13/21'},
{ artist: 'Cannons', venue: 'Nashville Underground', image: 'https://artistphotos.s3.us-east-2.amazonaws.com/pop/cannons.jpg', tickets_left: 42, genre_id: 4, date: '09/19/21'},
{ artist: 'Doja Cat', venue: "Bicentennial Park", image: 'https://artistphotos.s3.us-east-2.amazonaws.com/pop/Doja-Cat.jpg', tickets_left: 48, genre_id: 4, date: '10/14/21'}])
