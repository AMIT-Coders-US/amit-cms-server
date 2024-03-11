import AdminJS from "adminjs";
import express from "express";
import { Router } from "express";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/mongoose";
import mongoose from "mongoose";
import cors from "cors";
import { DefaultAuthProvider } from "adminjs";
import { dark, light, noSidebar } from "@adminjs/themes";
import Connect from "connect-pg-simple";
import dotenv from "dotenv";

import Course from "./models/course.model.js";
import Project from "./models/project.model.js";
import Review from "./models/review.model.js";
import Scholarship from "./models/scholarship.model.js";
import StepsToApply from "./models/stepsToApply.model.js";
import FAQ from "./models/faq.model.js";
import NextCohort from "./models/nextcohort.model.js";

import courseRoutes from "./routes/courseRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";
import stepsRoutes from "./routes/stepsToApplyRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import Link from "./models/link.model.js";
import linkRoutes from "./routes/linkRoutes.js";
import cohortRoutes from "./routes/cohortRoutes.js";

dotenv.config();
// const PORT = 5001;

const DEFAULT_ADMIN = {
  email: "admin@amitcoders.org",
  password: "adminSecret@1",
};

AdminJS.registerAdapter({
  Database,
  Resource,
});

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

const authProvider = new DefaultAuthProvider({
  authenticate,
});

const start = async () => {
  const app = express();
  const router = Router();

  app.use("/Assets", express.static("./custom-adminjs.css"));

  app.use(cors());

  app.use("/api/project", projectRoutes);
  app.use("/api/course", courseRoutes);
  app.use("/api/review", reviewRoutes);
  app.use("/api/scholarship", scholarshipRoutes);
  app.use("/api/steps", stepsRoutes);
  app.use("/api/faqs", faqRoutes);
  app.use("/api/links", linkRoutes);
  app.use("/api/cohort", cohortRoutes);

  const mongooseDb = await mongoose.connect(process.env.DATABASE_URL);

  const admin = new AdminJS({
    assets: {
      styles: ["./Assets/custom-adminjs.css"],
    },
    branding: {
      companyName: "Courses CMS",
      softwareBrothers: false, // Remove the "powered by SoftwareBrothers" link
    },
    defaultTheme: dark.id,
    availableThemes: [dark, light, noSidebar],
    databases: [mongooseDb],
    resources: [
      {
        resource: Course,
        resource: Project,
        resource: Review,
        resource: Scholarship,
        resource: StepsToApply,
        resource: FAQ,
        resource: Link,
        resource: NextCohort,
      },
    ],
    auth: {
      authenticate: async (email, password) => {
        // Add your authentication logic here, for example:
        if (email === "admin@example.com" && password === "password") {
          return { email }; // Returning the user object
        } else {
          return null; // Authentication failed
        }
      },
    },
  });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: "sessionsecret",
    },
    null,
    {
      // store: mongooseDb,
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "adminjs",
    }
  );

  // const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  app.listen(process.env.PORT || "3000", () => {
    console.log(
      `AdminJS started on http://localhost:${process.env.PORT}${admin.options.rootPath}`
    );
  });
};

start().catch((err) => console.error(err));
