import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity({name: "client"})
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string;

    @OneToMany(() => OrderEntity, (order) => order.client)
    orders: OrderEntity[];
}
