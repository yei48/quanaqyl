import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';
export const profiles=sqliteTable('profiles',{userId:text('user_id').primaryKey(),data:text('data').notNull(),photoKey:text('photo_key'),updatedAt:integer('updated_at').notNull()});
export const attempts=sqliteTable('attempts',{userId:text('user_id').notNull(),id:text('id').notNull(),data:text('data').notNull(),createdAt:integer('created_at').notNull()},t=>[primaryKey({columns:[t.userId,t.id]})]);
export const awards=sqliteTable('awards',{userId:text('user_id').notNull(),key:text('key').notNull(),amount:integer('amount').notNull(),createdAt:integer('created_at').notNull()},t=>[primaryKey({columns:[t.userId,t.key]})]);
export const pauses=sqliteTable('pauses',{userId:text('user_id').notNull(),id:text('id').notNull(),start:integer('start').notNull(),end:integer('end')},t=>[primaryKey({columns:[t.userId,t.id]})]);
