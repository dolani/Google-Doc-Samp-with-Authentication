import NextAuth from "next-auth"
import Providers from 'next-auth/providers';

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    // A database is optional, but required to persist accounts.
    // database: process.env.DATABASE_URL,
};
export default NextAuth(options);