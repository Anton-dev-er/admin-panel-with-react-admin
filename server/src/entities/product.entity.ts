import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { OrderEntity } from "./order.entity";

@Entity({name: "product"})
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: string

    @Column('simple-array', { array: true })
    shops: string[];

    @OneToMany(() => OrderEntity, (order) => order.product)
    orders: OrderEntity[];

    @ManyToOne(() => CategoryEntity, (category) => category.products)
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;

}
