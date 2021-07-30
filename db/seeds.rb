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
