import { AbstractRepository } from "@app/common/database/abstract.repository";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationDocument } from "./models/reservation.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ReservationRepository extends AbstractRepository<ReservationDocument>{
    protected logger: Logger = new Logger(ReservationRepository.name)

    constructor(
        @InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>
    ){
        super(reservationModel)
    }
}