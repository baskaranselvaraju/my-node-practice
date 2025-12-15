import redis from "redis";

const redisClient = redis.createClient();

redisClient.on("error", (err) => console.log("Redis Client Error", err));

await redisClient.connect();

export const cache = (keyPrefix) => async (req, res, next) => {
  const key = `${keyPrefix}:${req.baseUrl}${req.path}`;
  console.log(key);
  const cachedData = await redisClient.get(key);

  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  } else {
    // Override res.json to store response in Redis
    const originalJson = res.json.bind(res);
    res.json = async (data) => {
      await redisClient.setEx(key, 60, JSON.stringify(data)); // cache for 60 sec
      return originalJson(data);
    };

    next();
  }
};

export default redisClient;
