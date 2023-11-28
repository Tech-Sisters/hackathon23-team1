import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../lib/mongodb";
import { compare } from "bcryptjs";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const dbName = process.env.DB_NAME;
        const client = await clientPromise;
        const db = client.db(dbName);
        const users = await db.collection("users");
        const user = await users.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found with the email");
        }
        const checkPassword = await compare(credentials.password, user.password);
        if (!checkPassword) {
          throw new Error("Password doesn't match");
        }
        return { email: user.email };
      },
    }),
  ],
});
