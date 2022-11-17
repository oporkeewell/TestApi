"# TestApi" 

**รายละเอียดโปรเจ็ก**

+ Microservice จะแบ่งไว้ทั้งหมดตามนี้ครับ
  - UserApi : จะดูแลเรื่องการAuthและจัดการข้อมูลที่เกี่ยวกับUserครับ ใช้พอร์ต 3000
  - ProductApi : จะดูแลและจัดการข้อมูลที่เกี่ยวกับสินค้าครับ ใช้พอร์ต 3001
  - OrderApi : จะดูแลและจัดการข้อมูลที่เกี่ยวกับการสั้งซื้อสินค้าครับ ใช้พอร์ต 3002

    * โดยใช้ Node.js,Express.js,javascript ในการเขียนครับ
    * โดยแต่ละตัวเก็บข้อมูลโดยใช้ MongoDB ครับ และเก็บแยกฐานข้อมูลกันครับ
    * ในส่วนของการทำ rateLimit ใช้ Redis ครับ
    * ใช้การ Auth ด้วย JWT BearerToken ครับ
    * การ validate ข้อมูลใช้ Joi ครับ
    * ได้ทำไฟล์ Postman ไว้เพื่อเป็นตัวอย่างการใช้งานครับ
    * สามารถดู ER Diagram เพิ่มเติมได้ครับ

