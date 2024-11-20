# The Wild Oasis Website

**The Wild Oasis Website** is a web application developed using Next.js for a boutique hotel. The platform enables users to browse and book rooms, manage their bookings, and view real-time room availability. The application is powered by Supabase, providing a robust backend for secure and efficient data management.

## Features

- **Room Booking:** Easily book rooms directly from the website.
- **Manage Bookings:** View, update, or cancel your reservations.
- **Real-Time Availability:** Check if rooms are booked by other users in real-time.
- **Supabase Integration:** Ensures up-to-date booking information and secure data management.
- **Responsive Design:** Optimized for various devices and screen sizes.

## Technologies Used

- **Next.js:** React framework for server-side rendering and static site generation.
- **Supabase:** Backend as a service for database management and real-time data syncing.
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **JavaScript:** Programming language for application logic.
- **HTML & CSS:** Markup and styling.
- **Vercel:** Platform for deployment.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Gerbull/the-wild-oasis-website.git
   cd the-wild-oasis-website
   ```

2. **Install Dependencies:**
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Set Up Supabase:**
   - Create a project on [Supabase](https://supabase.com/).
   - Set up the database schema for managing room bookings.
   - Add your Supabase credentials to the `.env` file:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
     NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
     ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Deployment

The application is deployed on Vercel and can be accessed at [the-wild-oasis-website-chi-eight.vercel.app](https://the-wild-oasis-website-chi-eight.vercel.app/).

## Usage

1. **Browse Rooms:** View available rooms with details and pricing.
2. **Book Rooms:** Select your desired room and complete the booking process.
3. **Manage Reservations:** Log in to view and update your bookings.
4. **Real-Time Updates:** Check room availability in real-time to avoid conflicts.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

Made with ❤️ by Dmitrii Geraskin ([Gerbull](https://github.com/Gerbull)).  
For questions or suggestions, feel free to reach out via GitHub.
