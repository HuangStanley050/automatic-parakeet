import mongoose from "mongoose";
import redis from "redis";
import util from "util";
const redisUrl = process.env.REDIS_URL;
const client = redis.createClient(redisUrl);
