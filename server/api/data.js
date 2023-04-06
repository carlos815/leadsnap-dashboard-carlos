export default defineEventHandler((event) => {
    return {
        "profile": {
            "name": "Patrick Shannon",
            "img": "profile-picture.jpg"
        },
        "gbplocations": [
            {
                "id": 1,
                "site": "Google",
                "image": "google.png",
                "name": "Phoenix Limo Co.",
                "in-app": "4224 W Charleston Blvd, Las Vegas, NV89102",
                "email": "123-456-7890",
                view: true,
                citation: false,
                reload: true,
            },
            {
                "id": 2,
                "site": "Facebook",
                "image": "facebook.png",
                "name": "Phoenix Limo Co.",
                "in-app": "4224 W Charleston Blvd, Las Vegas, NV89102",
                "email": "123-456-7890",
                view: false,
                citation: true,
                reload: true,
            },
            {
                "id": 3,
                "site": "Linkedin",
                "image": "linkedin.png",
                "name": "Phoenix Limo Co.",
                "in-app": "4224 W Charleston Blvd, Las Vegas, NV89102",
                "email": "123-456-7890",
                view: true,
                citation: true,
                reload: false,
            },
            {
                "id": 4,
                "site": "Bing",
                "image": "bing.png",
                "name": "Phoenix Limo Co.",
                "in-app": "4224 W Charleston Blvd, Las Vegas, NV89102",
                "email": "123-456-7890",
                view: false,
                citation: false,
                reload: true,
            }
        ]
    }
})