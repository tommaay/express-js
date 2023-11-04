import express, { Request, Response } from "express";

const router = express.Router();

router.get("/contacts", (req: Request, res: Response) => {
  res.json({
    message: "Get all Contacts request successful!",
  });
});

router.get("/contacts/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: `Get contact with the ID of ${id} request successful!`,
  });
});

router.post("/contacts", (req: Request, res: Response) => {
  res.json({
    message: "Create contact request successful!",
  });
});

router.put("/contacts/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: `Update contact with the ID of ${id} request successful!`,
  });
});

router.delete("/contacts/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: `Delete contact with the ID of ${id} request successful!`,
  });
});

module.exports = router;
