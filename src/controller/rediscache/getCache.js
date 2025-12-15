import redisClient from "../../middleware/cache.js"; // make sure redisClient is exported

// Get all cached keys
export const getCachedKey = async (req, res) => {
  try {
    const keys = await redisClient.keys("*");
    console.log(keys)
    res.json({ keys });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get cached value for a specific key
export const getCachedSpecificKey = async (req, res) => {
  try {
    const key = req.query.key;
    console.log("Requested key:", key);

    const keys = await redisClient.keys("*");
    console.log("All keys in Redis:", keys);

    const data = await redisClient.get(key);
    console.log("Data from Redis:", data);

    if (!data) return res.status(404).json({ message: "Key not found" });

    res.json({ key, data: JSON.parse(data) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

