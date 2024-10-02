import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { CategoryEntity } from "./category.entity";
import { ClientEntity } from "./client.entity";

@Entity({name: "order"})
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantity: number

    @CreateDateColumn()
    date: number

    @ManyToOne(() => ProductEntity, (product) => product.orders)
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity;

    @ManyToOne(() => ClientEntity, (client) => client.orders)
    @JoinColumn({ name: 'client_id' })
    client: ClientEntity;
}
