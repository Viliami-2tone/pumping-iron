const db = require("../db");
module.exports = {
    getLifters: async (fuck) => {
        const result = await db.query(`SELECT * FROM 
        (SELECT id,
              first_name as "firstName",
              last_name as "lastName",
              is_pro_member as "proMember"
            FROM
              lifter) a
        LEFT JOIN (SELECT lifter_id, count(*) as "workouts"
        FROM workout
        GROUP BY lifter_id) b
        ON a.id = b.lifter_id 
      LIMIT
        20 OFFSET ${(fuck-1) * 20}`);
        // @ts-ignore
        return result.rows;
    },
    getFullList: async () => {
      const result = await db.query(`SELECT id FROM lifter`);
      return result.rows;
    }
}
