import express, { Request, Response } from "express";
import { baseUrl } from "../../../../util/common";
import multer, { Multer } from "multer";
import OnBoardingConductorServices from "../../controller/onBoardingConductor/onBoardingConductor.services";

export default class OnBoardingConductorRoute {
  constructor(app: express.Application) {
    const onBoardingConductorServices = new OnBoardingConductorServices();
    this.init(app, onBoardingConductorServices);
  }

  init(
    app: express.Application,
    onBoardingConductorServices: OnBoardingConductorServices
  ): void {
    app
      .route(`${baseUrl}/onBoardingConductor`)
      .post((req: Request, res: Response) =>
        onBoardingConductorServices.onBoardingNewConductor(req, res, "021G")
      );
  }
}