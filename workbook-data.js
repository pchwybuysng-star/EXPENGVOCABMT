/* ==========================================================
   5500111 EXPERIENTIAL ENGLISH 1 — UNIT 3 & UNIT 4 WORKBOOK DATA
   Content from the course book (pp. 65–144). Answer keys and
   explanations were written for this site (the book has no key).
   ========================================================== */
window.WORKBOOK = {
  units: [
    /* ======================================================
       UNIT 3
       ====================================================== */
    {
      id: 'u3',
      number: 3,
      title: 'Industry, Innovation & Infrastructure',
      titleTh: 'อุตสาหกรรม นวัตกรรม และโครงสร้างพื้นฐาน',
      emoji: '🚇',
      pages: 'หน้า 65–100',
      sections: {
        /* ---------------- READING ---------------- */
        reading: [
          {
            type: 'heading',
            eyebrow: 'Reading Skills',
            title: 'Pronoun Reference',
            subtitle: 'การหาว่าคำสรรพนามในบทอ่านหมายถึงอะไร (antecedent)'
          },
          {
            type: 'note',
            title: 'Types of Pronouns',
            html: `<p>การใช้คำสรรพนามช่วยให้ผู้เขียนไม่ต้องพูดคำนามเดิมซ้ำ ๆ และทำให้ประโยคลื่นไหลขึ้น คำสรรพนามในภาษาอังกฤษแบ่งตามหน้าที่ได้ดังนี้</p>`,
            table: {
              columns: ['Type', 'Usage', 'Examples'],
              rows: [
                ['Personal', 'แทนคน สัตว์ หรือสิ่งของ ทั้งประธานและกรรม', 'I, you, we, they, he, she, it, me, us, them, him, her'],
                ['Possessive', 'แสดงความเป็นเจ้าของหรือความสัมพันธ์', 'mine, yours, ours, theirs, his, hers, its'],
                ['Reflexive', 'ใช้เมื่อประธานและกรรมเป็นคนเดียวกัน', 'myself, yourself, ourselves, themselves, himself, herself, itself'],
                ['Intensive', 'ใช้เน้นประธาน', 'myself, yourself, ourselves, themselves, himself, herself, itself'],
                ['Demonstrative', 'ชี้เฉพาะสิ่งใดสิ่งหนึ่ง', 'this, that, these, those'],
                ['Indefinite', 'อ้างถึงคนหรือสิ่งที่ไม่เจาะจง', 'anybody, somebody, everybody, nobody, anyone, someone, everything, nothing'],
                ['Interrogative', 'ใช้ถามถึงคนหรือสิ่งที่ไม่รู้', 'who, whom, whose, which, what'],
                ['Relative', 'เชื่อม dependent clause กับ independent clause', 'who, whom, whose, which, what, that'],
                ['Reciprocal', 'แสดงการกระทำต่อกันและกัน', 'each other, one another']
              ]
            }
          },
          {
            type: 'note',
            title: 'Antecedent — สรรพนามอ้างถึงอะไร?',
            html: `
              <p>สรรพนามอาจอ้างถึง <strong>ความคิดทั้งประโยค</strong> ไม่ใช่แค่คำนามคำเดียว เช่น</p>
              <blockquote>The use of reusable cups should be promoted widely. <mark>This</mark> should not be the only measure to curb plastic use, though.</blockquote>
              <p>“This” ไม่ได้หมายถึงแก้ว แต่หมายถึง <em>การส่งเสริมให้ใช้แก้วซ้ำ</em> ทั้งความคิด</p>
              <p>คำนามที่สรรพนามอ้างถึงเรียกว่า <strong>antecedent</strong> และ <strong>ไม่จำเป็นต้องเป็นคำนามที่อยู่ใกล้ที่สุด</strong></p>
              <blockquote>Cloud computing is hosted on remote servers, <mark>which</mark> are maintained in data centers around the world. Cloud computing is widely used in education and business. <mark>It</mark> allows users to store files and run software online…</blockquote>
              <ul>
                <li><strong>which</strong> → remote servers (คำนามที่ใกล้ที่สุด และสอดคล้องกับกริยาพหูพจน์ <em>are maintained</em>)</li>
                <li><strong>It</strong> → cloud computing (ไม่ใช่คำนามที่ใกล้ที่สุด)</li>
              </ul>
              <p class="tip">💡 ใช้ <strong>เพศ (gender)</strong> + <strong>พจน์ (number)</strong> + <strong>ความหมาย (meaning)</strong> ร่วมกัน โดยเฉพาะเมื่อมีการใช้ singular “they” แบบไม่ระบุเพศ</p>`
          },
          {
            type: 'exercise',
            kind: 'pronounHunt',
            id: 'u3-r-hunt',
            title: 'Warm-up: ล่าคำสรรพนาม',
            instructions: 'แตะทุกคำที่เป็นคำสรรพนาม (รวม possessive อย่าง his / her / its และ relative pronoun อย่าง who / which / that) ในแต่ละย่อหน้าเกี่ยวกับนักวิทยาศาสตร์ แล้วกดตรวจ',
            passages: [
              {
                title: 'Albert Einstein',
                text: 'In 1905, Einstein published several important papers. {He} wrote about topics like tiny particles moving in liquid, how light can release electricity, and special relativity. In special relativity, {he} explained that space and time are connected. The idea later helped scientists understand the universe better. In 1916, {he} developed general relativity, {which} explains that gravity can bend space and time.'
              },
              {
                title: 'Marie Curie',
                text: 'Marie Curie was a scientist {who} studied radioactivity. {She} discovered two new elements: polonium and radium. {Her} work helped doctors use radiation in medicine, such as in some cancer treatments. Curie is also known because {she} won two Nobel Prizes in two different science fields. {She} is remembered for {her} hard work and for changing modern science.'
              },
              {
                title: 'Isaac Newton',
                text: 'Newton was a quiet person, and {he} kept {his} discoveries secret for many years. {His} friend Edmund Halley encouraged {him} to publish {his} work. Halley was interested because people were discussing a question about how planets move. When Halley asked Newton for help, Newton already had the answer. Halley was so impressed that {he} encouraged Newton to share {his} ideas with the world.'
              },
              {
                title: 'Ada Lovelace',
                text: 'Ada Lovelace was a mathematician in the 1800s. {She} worked with Charles Babbage, {who} designed an early machine for calculations. Ada wrote clear notes about how the machine could follow steps to solve problems. Many people consider {her} as one of the first writers of a computer program. Today, {she} is remembered as an important figure in the history of computing.'
              },
              {
                title: 'Nikola Tesla',
                text: 'Tesla made many contributions to electricity. One important invention was the Tesla coil, a device {that} produces very high voltage. {It} helped people understand how to create and control strong electrical energy. Tesla also explored the idea of sending power without wires. Today, the idea continues in research on wireless charging. {That} is why {we} now see {it} in devices like smartphones.'
              }
            ],
            note: 'ข้อสังเกต: “that” ใน “explained that space…” และ “so impressed that…” เป็นคำเชื่อม (conjunction) ไม่ใช่สรรพนาม ส่วน “That is why…” เป็น demonstrative pronoun'
          },
          {
            type: 'heading',
            eyebrow: 'Reading Text 1',
            title: 'New MRT and Monorail Lines Transforming Commutes',
            subtitle: 'Warm-up: คุณเดินทางในกรุงเทพฯ อย่างไร? ปัญหาที่ใหญ่ที่สุดของการเดินทางคืออะไร? รถไฟฟ้าสายใหม่จะเปลี่ยนการเดินทางอย่างไร?'
          },
          {
            type: 'passage',
            id: 'u3-text1',
            title: 'NEW MRT AND MONORAIL LINES TRANSFORMING COMMUTES',
            source: 'Adapted from asialifestylemagazine.com',
            paragraphs: [
              'Bangkok’s notorious traffic jams are getting some relief thanks to new mass transit lines that have recently opened. In 2023, two new rapid transit lines opened, dramatically expanding the city’s rail network: the MRT Yellow Line and the MRT Pink Line. <b class="ref">These<sup>1</sup></b> are modern monorails that now link areas of the city that previously had no train service, giving residents more convenient travel options.',
              'New mass transit lines like the Pink and Yellow Lines have expanded the rail network and cut commute times. The Pink Line began full service in late 2023, spanning 34.5 km with 30 stations from Bangkok’s northern suburb of Khae Rai (Nonthaburi) to Min Buri in the east. <b class="ref">It<sup>2</sup></b> is driverless and zips above congested roads, cutting travel time by over 50%. On that route, trips that once took over two hours by car now take under an hour by train. The Pink Line is designed to integrate with five other transit lines as well, and <b class="ref">this<sup>3</sup></b> improves connectivity across northern Bangkok.',
              'On the other side of town, the Yellow Line (which opened in mid-2023) runs over 30 km from Lat Phrao in north-central Bangkok to Samrong in the southeast. <b class="ref">It<sup>4</sup></b> serves neighbourhoods along the eastern ring road and connects with existing MRT/BTS lines at key points, essentially creating an orbital route. Together, the Pink and Yellow Lines have significantly improved public transport options. At the Pink Line launch, Thailand’s Deputy Transport Minister noted that <b class="ref">they<sup>5</sup></b> were “providing a faster and more efficient way for people to travel between the city’s major districts.”',
              'These new lines are a game-changer for commuters. Residents living in areas like Min Buri or along Lat Phrao Road, <b class="ref">which<sup>6</sup></b> used to be far from any rail line, can now hop on a clean, air-conditioned train and reach downtown business centres or connections to the BTS/MRT with ease. <b class="ref">This<sup>7</sup></b> opens up new residential options for long-term visitors, so <b class="ref">they<sup>8</sup></b> are no longer limited to living near older BTS lines anymore. For example, an IT professional could live in a more spacious apartment in Nonthaburi or along Srinakarin Road (served by the Yellow Line) and still commute to an office in Sukhumvit conveniently. The expanded network also reduces reliance on cars and motorbikes, leading to less time stuck in traffic and more sustainable urban travel.',
              'And it doesn’t stop here—Bangkok continues to expand its urban rail system. The MRT Orange Line is currently under construction to link eastern and western Bangkok (from the Thailand Cultural Centre through Ramkhamhaeng to Min Buri), and although <b class="ref">its<sup>9</sup></b> full completion has faced delays, officials project the entire line will be operational by 2030. The eastern section is expected to open earlier (late 2020s), and <b class="ref">that<sup>10</sup></b> will further improve access to suburban areas. Future projects, such as the planned Light Blue Line and extensions of existing lines, are also being developed. For residents and visitors, each new line means shorter commute times, less money spent on taxis or fuel, and easier access to explore Bangkok’s diverse neighbourhoods.'
            ]
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u3-r1-a1',
            title: 'Reading Activity 1 — Pronoun Reference',
            instructions: 'คำสรรพนามที่มีตัวเลขกำกับใน Reading Text 1 อ้างถึงอะไร?',
            items: [
              { q: '<b>1. These</b> (paragraph 1)', options: ['the city’s rail network', 'the MRT Yellow Line and the MRT Pink Line', 'Bangkok’s traffic jams', 'areas with no train service'], answer: 1, explain: '“These are modern monorails” — สิ่งที่เป็นโมโนเรลคือรถไฟฟ้าสองสายที่เพิ่งพูดถึง คือสายสีเหลืองและสายสีชมพู' },
              { q: '<b>2. It</b> (paragraph 2)', options: ['The Pink Line', 'Khae Rai', 'the rail network', 'Min Buri'], answer: 0, explain: 'ประโยคก่อนหน้าบรรยาย Pink Line ว่ายาว 34.5 กม. แล้ว “It is driverless” จึงหมายถึง Pink Line (ไม่ใช่ Min Buri ที่อยู่ใกล้กว่า)' },
              { q: '<b>3. this</b> (paragraph 2)', options: ['the two-hour car trip', 'the 50% cut in travel time', 'the fact that the Pink Line integrates with five other transit lines', 'northern Bangkok'], answer: 2, explain: '“this improves connectivity” อ้างถึงความคิดทั้งประโยค — การที่สายสีชมพูออกแบบให้เชื่อมกับรถไฟฟ้าอีก 5 สาย' },
              { q: '<b>4. It</b> (paragraph 3)', options: ['the eastern ring road', 'the Yellow Line', 'Samrong', 'the Pink Line'], answer: 1, explain: 'ย่อหน้าที่ 3 พูดถึง Yellow Line “It serves neighbourhoods along the eastern ring road”' },
              { q: '<b>5. they</b> (paragraph 3)', options: ['commuters', 'existing MRT/BTS lines', 'the Pink and Yellow Lines', 'Thailand’s transport officials'], answer: 2, explain: 'รัฐมนตรีกล่าวว่า “they were providing a faster and more efficient way…” หมายถึงรถไฟฟ้าสองสายใหม่ (Pink and Yellow Lines) ที่เพิ่งพูดถึงในประโยคก่อน' },
              { q: '<b>6. which</b> (paragraph 4)', options: ['residents', 'downtown business centres', 'areas like Min Buri or along Lat Phrao Road', 'air-conditioned trains'], answer: 2, explain: '“which used to be far from any rail line” ขยายพื้นที่ (Min Buri / Lat Phrao Road) ที่เคยอยู่ไกลจากรถไฟฟ้า' },
              { q: '<b>7. This</b> (paragraph 4)', options: ['a clean, air-conditioned train', 'residents now being able to reach downtown and BTS/MRT connections easily by train', 'the older BTS lines', 'long-term visitors'], answer: 1, explain: '“This opens up new residential options” อ้างถึงความคิดทั้งประโยคก่อนหน้า — ผู้อยู่อาศัยไปถึงใจกลางเมืองได้ง่ายด้วยรถไฟ' },
              { q: '<b>8. they</b> (paragraph 4)', options: ['long-term visitors', 'older BTS lines', 'residential options', 'IT professionals'], answer: 0, explain: '“so they are no longer limited to living near older BTS lines” — คนที่มีทางเลือกที่อยู่มากขึ้นคือ long-term visitors' },
              { q: '<b>9. its</b> (paragraph 5)', options: ['Bangkok', 'the MRT Orange Line', 'the Thailand Cultural Centre', 'Ramkhamhaeng'], answer: 1, explain: '“its full completion has faced delays” — การก่อสร้างที่ล่าช้าคือของสายสีส้ม (Orange Line)' },
              { q: '<b>10. that</b> (paragraph 5)', options: ['the year 2030', 'the Light Blue Line', 'the earlier opening of the eastern section (of the Orange Line)', 'suburban areas'], answer: 2, explain: '“The eastern section is expected to open earlier, and that will further improve access” — การเปิดส่วนตะวันออกก่อนจะช่วยให้เข้าถึงชานเมืองได้ดีขึ้น' }
            ]
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u3-r1-a2',
            title: 'Reading Activity 2 — Comprehension',
            instructions: 'ตอบคำถามจาก Reading Text 1',
            items: [
              { q: '1. Which statement best summarizes the main idea of the passage?', options: ['Bangkok is replacing older rail lines with new monorail technology.', 'Bangkok is expanding its rail network, making commuting easier and faster.', 'Bangkok is focusing only on downtown transport and business travel routes.', 'Bangkok is solving traffic problems mainly by improving roads and highways.'], answer: 1, explain: 'ทั้งบทพูดถึงรถไฟฟ้าสายใหม่ (ชมพู เหลือง ส้ม ฯลฯ) ที่ขยายโครงข่ายและทำให้เดินทางสะดวก รวดเร็วขึ้น — ไม่ได้แทนที่สายเดิม' },
              { q: '2. What can be inferred about Bangkok’s transportation system from the passage?', options: ['Most residents still prefer traveling by boat instead of rail.', 'New rail lines are mainly designed for tourists visiting Bangkok.', 'The government plans to stop expanding the rail network soon.', 'The city is trying to reduce dependence on private vehicles.'], answer: 3, explain: 'ย่อหน้า 4: “The expanded network also reduces reliance on cars and motorbikes” จึงอนุมานได้ว่าเมืองพยายามลดการพึ่งพารถส่วนตัว' },
              { q: '3. According to the passage, how do the new rail lines benefit commuters?', options: ['They make train tickets cheaper than bus fares.', 'They allow commuters to avoid living in suburban areas.', 'They reduce travel time and improve access across the city.', 'They replace all existing BTS and MRT routes.'], answer: 2, explain: 'ลดเวลาเดินทางกว่า 50% และช่วยให้เข้าถึงพื้นที่ต่าง ๆ ได้ง่ายขึ้น' },
              { q: '4. What can be inferred about people living in Min Buri or along Srinakarin Road?', options: ['They now have better access to rail transport than they did before.', 'They now prefer using taxis because trains are less convenient there.', 'They now face longer travel times because roads are more congested.', 'They now avoid downtown areas because travel connections are limited.'], answer: 0, explain: 'พื้นที่เหล่านี้ “used to be far from any rail line” แต่ตอนนี้ขึ้นรถไฟได้แล้ว' },
              { q: '5. Which description of the Yellow Line matches the information in the passage?', options: ['It runs from Lat Phrao to Samrong, covering over 30 km in total.', 'It runs from Khae Rai to Min Buri, covering about 34.5 km in total.', 'It runs from Sukhumvit to Silom, directly linking the main business areas.', 'It runs from Thailand Cultural Centre to Ramkhamhaeng, and is still under construction.'], answer: 0, explain: 'ย่อหน้า 3: “runs over 30 km from Lat Phrao … to Samrong” (ตัวเลือก B คือสายสีชมพู, D คือสายสีส้ม)' },
              { q: '6. By what year do officials project the MRT Orange Line will be fully operational?', options: ['2027', '2028', '2030', '2035'], answer: 2, explain: '“officials project the entire line will be operational by 2030”' },
              { q: '7. What is the writer’s main purpose in the passage?', options: ['To describe new rail lines and explain their benefits for commuters', 'To argue that road travel is still the most effective option in Bangkok', 'To compare Bangkok’s transport system with those of other cities in the region', 'To warn readers that future rail projects will not be completed on time'], answer: 0, explain: 'ผู้เขียนอธิบายรถไฟฟ้าสายใหม่และประโยชน์ต่อผู้เดินทาง ไม่ได้โต้แย้งหรือเปรียบเทียบกับเมืองอื่น' }
            ]
          },
          {
            type: 'discussion',
            title: 'Discussion — Reading Text 1',
            questions: [
              'How do you think new rail lines can change people’s daily lives in a big city like Bangkok?',
              'What are the advantages and disadvantages of living in areas connected to mass transit systems?',
              'Do you think expanding public transportation is a good solution to Bangkok’s traffic problems? Why or why not?',
              'Which form of public transportation do you prefer in Bangkok (e.g., BTS, MRT, bus, boat, taxi)? Explain your reasons.',
              'Besides rail transport, what other transportation improvements would you recommend for Bangkok?'
            ]
          },
          {
            type: 'heading',
            eyebrow: 'Reading Text 2',
            title: 'The Three Types of AI',
            subtitle: 'Warm-up: คุณใช้ AI บ่อยแค่ไหน? เชื่อใจ AI ให้ตัดสินใจเรื่องสำคัญไหม? คิดว่า AI จะแทนที่งานจำนวนมากหรือเปล่า?'
          },
          {
            type: 'passage',
            id: 'u3-text2',
            title: 'THE THREE TYPES OF AI',
            source: 'Adapted from blog.irvingwb.com',
            paragraphs: [
              'Throughout the Industrial Revolution period, there were periodic panics about the impact of automation on jobs, going back to the so-called Luddites, textile workers in the 1810s who destroyed the new machines that were threatening their jobs. Now, artificial intelligence is already superior to humans in a number of tasks. The question of whether AI will replace human workers assumes that AI and humans have the same qualities and abilities – but, in reality, they don’t. AI-based machines are fast, accurate, and consistently rational, but they aren’t intuitive, emotional, or culturally sensitive. And it’s exactly these abilities that humans possess. To better understand the relationship between human and artificial intelligence, we might categorise intelligence into three different types: artificial intelligence (AI1), authentic intelligence (AI2), and augmented intelligence (AI3).',
              '<span class="sub-head">Artificial Intelligence (AI1)</span>In its simplest form, AI refers to computers acting and making decisions in ways that seem intelligent. AI1 is generally based on machine learning methods, which involve analysing large amounts of information using powerful computers and sophisticated algorithms. Technology advances have enabled selected AI1 applications to achieve or surpass human levels of performance in specific tasks, including image and speech recognition, skin cancer classification, breast cancer detection, and prostate cancer grading. In addition, contrary to humans, AI never gets physically tired and as long as it’s fed data it will keep going. These qualities mean that AI is perfectly suited to put to work on lower-level routine tasks that are repetitive and take place within a controlled work environment.',
              '<span class="sub-head">Authentic Intelligence (AI2)</span>Authentic intelligence refers to human intelligence, including the abilities to reason, use judgment, adapt to changing situations, and understand emotions and social contexts. Unlike artificial intelligence, which is only responsive to the data available, humans have the ability to imagine, anticipate, feel, and judge changing situations. In a corporate, teams and organizations constantly interact with the external environment and therefore have to deal with influences from outside. Such work settings require the ability to anticipate and manage sudden changes and miscommunication, while also being creative in clarifying a vision and future strategy. These require authentic intelligence.',
              '<span class="sub-head">Augmented Intelligence (AI3)</span>Augmented intelligence refers to the collaboration between human intelligence and artificial intelligence systems, where AI enhances human decision-making, creativity, and productivity rather than replacing people. This combination of both AI1 and AI2 talents will make the future of intelligent work. We have seen a number of examples where the combination of humans and machines makes better decisions than either one on its own. Sabermetrics, the use of statistics in baseball to project a player’s performance and career, is one such prominent example. Many people viewed it as a conflict between the traditional approach of the scouts – the professional talent evaluators who learn about the players first-hand by meeting them in person and watching them play – versus the new approaches being introduced by the statheads, who mostly rely on sophisticated statistical analysis to predict future performance. The data that compared the performance of scouts versus more purely statistical approaches showed that the scouts’ predictions were about 15 percent better than those that relied on statistics alone. The good scouts use a hybrid approach. Statistics alone cannot tell you everything you want to know about a player, and the additional personal evaluations of the scouts make a significant difference.',
              'Chess is another prominent example. In 1997, world champion Kasparov lost a chess match to IBM’s Deep Blue supercomputer. Kasparov himself realized that the strength of the human players is not what determines the winning team. Rather, it’s the quality of the partnership that matters, that is, the process of how players and computers interact. As Kasparov put it, “Weak human + machine + better process was superior to a strong computer alone and, more remarkably, superior to a strong human + machine + inferior process.”',
              'Automation can indeed replace some human labour. However, automation can also support workers, raising economic outputs in ways that often lead to more long-run employment, not less. After all, new technology always has disruptive effects early on in the implementation and development phases and usually reveals its real value only after some time.'
            ]
          },
          {
            type: 'exercise',
            kind: 'open',
            id: 'u3-r2-main',
            title: 'Reading Activity 1 — Main Idea',
            instructions: 'เขียนใจความสำคัญของบทอ่านด้วยคำของตัวเอง แล้วเทียบกับตัวอย่างคำตอบ',
            items: [
              { q: '1. What is the main idea of the passage?', model: 'AI will not simply replace human workers because AI and humans have different strengths; the best results come from augmented intelligence, where human (authentic) intelligence and artificial intelligence work together.', checklist: ['บอกว่า AI กับมนุษย์มีจุดแข็งต่างกัน', 'กล่าวถึงการทำงานร่วมกัน (augmented intelligence)', 'ไม่ได้บอกแค่รายละเอียดย่อย เช่น หมากรุก หรือเบสบอล'] }
            ]
          },
          {
            type: 'exercise',
            kind: 'tf',
            id: 'u3-r2-tfng',
            title: 'Reading Activity 1 — True / False / Not Given',
            instructions: 'TRUE = ตรงกับบทอ่าน · FALSE = ขัดแย้งกับบทอ่าน · NOT GIVEN = บทอ่านไม่ได้กล่าวถึง',
            labels: ['TRUE', 'FALSE', 'NOT GIVEN'],
            items: [
              { q: '2. Public anxiety about machines replacing workers existed long before the development of modern artificial intelligence.', answer: 'TRUE', explain: 'ย่อหน้า 1: มีความตื่นตระหนกเรื่องเครื่องจักรแย่งงานตั้งแต่ยุค Luddites ในทศวรรษ 1810' },
              { q: '3. The passage suggests that AI and humans have identical strengths and weaknesses.', answer: 'FALSE', explain: '“assumes that AI and humans have the same qualities and abilities – but, in reality, they don’t.”' },
              { q: '4. Some AI1 technologies have already matched or exceeded human performance in certain medical fields.', answer: 'TRUE', explain: 'ย่อหน้า 2: AI1 “achieve or surpass human levels” ในงานอย่าง skin cancer classification, breast cancer detection' },
              { q: '5. Sabermetrics was immediately accepted by baseball scouts as a superior method of evaluating players.', answer: 'FALSE', explain: 'บทอ่านบอกว่าคนมองว่าเป็น “a conflict” ระหว่างแมวมองกับ statheads และการทำนายของแมวมองยังดีกว่าสถิติล้วน ๆ ~15% จึงขัดกับคำว่า “immediately accepted… as superior”' },
              { q: '6. Kasparov predicted that all professional chess tournaments would eventually require the use of AI.', answer: 'NOT GIVEN', explain: 'บทอ่านพูดถึงความเห็นของ Kasparov เรื่อง partnership แต่ไม่ได้พูดถึงการทำนายเรื่องการแข่งขันหมากรุกในอนาคต' }
            ]
          },
          {
            type: 'exercise',
            kind: 'fill',
            id: 'u3-r2-table',
            title: 'Reading Activity 2 — Complete the Table',
            instructions: 'เติมคำ <b>ONE WORD ONLY</b> จากบทอ่าน',
            items: [
              { q: '<span class="pill">AI1</span> AI1 uses machine learning methods and sophisticated ___ to analyse large amounts of information.', accept: ['algorithms'], explain: '“…using powerful computers and sophisticated algorithms.”' },
              { q: '<span class="pill">AI1</span> AI1 is especially suitable for routine and repetitive ___.', accept: ['tasks'], explain: '“…lower-level routine tasks that are repetitive…”' },
              { q: '<span class="pill">AI2</span> Authentic intelligence refers to human intelligence, including the ability to use ___ and adapt to changing situations.', accept: ['judgment', 'judgement'], explain: '“…the abilities to reason, use judgment, adapt to changing situations…”' },
              { q: '<span class="pill">AI2</span> Humans can understand emotions and social ___.', accept: ['contexts'], explain: '“…understand emotions and social contexts.”' },
              { q: '<span class="pill">AI3</span> Augmented intelligence combines human intelligence with AI systems to improve decision-making, creativity, and ___.', accept: ['productivity'], explain: '“AI enhances human decision-making, creativity, and productivity”' },
              { q: '<span class="pill">AI3</span> In augmented intelligence, the quality of the human-machine ___ is more important than individual strength alone.', accept: ['partnership'], explain: '“it’s the quality of the partnership that matters”' }
            ]
          },
          {
            type: 'exercise',
            kind: 'short',
            id: 'u3-r2-pronoun',
            title: 'Reading Activity 3 — Pronoun Reference',
            instructions: 'พิมพ์คำนามที่สรรพนามแต่ละตัวอ้างถึง (ตอบสั้น ๆ ภาษาอังกฤษ)',
            items: [
              { q: '1. The pronoun <b>they</b> (paragraph 1) refers to ___.', keywords: [['ai and humans', 'humans and ai', 'ai-based machines', 'machines']], model: '“they don’t” → AI and humans · “they aren’t intuitive” → AI-based machines', explain: 'ย่อหน้า 1 มี “they” 2 ที่: “in reality, they don’t” = AI and humans และ “but they aren’t intuitive” = AI-based machines' },
              { q: '2. The pronoun <b>it</b> (paragraph 2) refers to ___.', keywords: [['ai', 'artificial intelligence']], model: 'AI (artificial intelligence)', explain: '“AI never gets physically tired and as long as it’s fed data it will keep going.”' },
              { q: '3. The pronoun <b>these</b> (paragraph 3) refers to ___.', keywords: [['abilit', 'anticipate', 'skill', 'manage']], model: 'the abilities to anticipate and manage sudden changes and miscommunication and to be creative', explain: '“These require authentic intelligence.” — สิ่งที่ต้องใช้ authentic intelligence คือความสามารถที่บอกในประโยคก่อนหน้า' },
              { q: '4. The pronoun <b>it</b> (paragraph 4) refers to ___.', keywords: [['sabermetrics']], model: 'Sabermetrics', explain: '“Many people viewed it as a conflict…”' },
              { q: '5. The pronoun <b>them</b> (paragraph 4) refers to ___.', keywords: [['player']], model: 'the players', explain: '“…learn about the players first-hand by meeting them in person and watching them play”' },
              { q: '6. The pronoun <b>those</b> (paragraph 4) refers to ___.', keywords: [['prediction']], model: 'predictions', explain: '“the scouts’ predictions were about 15 percent better than those (= predictions) that relied on statistics alone”' }
            ]
          }
        ],

        /* ---------------- LANGUAGE FOCUS ---------------- */
        language: [
          {
            type: 'heading',
            eyebrow: 'Language Focus',
            title: 'Past Tenses for Narrative Writing',
            subtitle: 'เวลาเล่าเรื่อง เราใช้ past tense 4 แบบ: เหตุการณ์หลัก · ฉากหลัง · เหตุการณ์ที่เกิดก่อน · การกระทำต่อเนื่องจนถึงจุดหนึ่งในอดีต'
          },
          {
            type: 'tenseCards',
            cards: [
              {
                name: 'Past Simple',
                role: 'เหตุการณ์หลักของเรื่อง',
                form: 'Subject + V2 / -ed',
                uses: ['บอกว่าเกิดอะไรขึ้นก่อน–หลัง–สุดท้าย', 'การกระทำเดียวที่จบแล้วในอดีต', 'ชุดการกระทำต่อเนื่องกัน'],
                examples: ['I woke up, checked my phone, and noticed something strange.', 'The bus stopped, the driver turned, and everyone looked at me.'],
                time: 'yesterday, last night, two days ago, in 2020, then, after that',
                model: 'Yesterday, I left home early. I walked to the BTS station and checked my bag. Suddenly, I realized my wallet was missing. I ran back home, opened the door, and looked everywhere. In the end, I found it in my jacket pocket.'
              },
              {
                name: 'Past Continuous',
                role: 'ฉากหลัง / สิ่งที่กำลังเกิด',
                form: 'Subject + was / were + V-ing',
                uses: ['บรรยายฉากหลัง: It was raining, and the wind was blowing strongly.', 'การกระทำที่กำลังเกิด ณ ขณะนั้น: At 9 p.m., I was studying in my room.', 'ถูกขัดจังหวะด้วย Past Simple: I was sleeping when my phone rang.'],
                examples: [],
                time: 'while, when, as, at that moment, all evening, at 8 p.m.',
                model: 'It was late, and I was walking home alone. The streets were getting quieter, and the shops were closing. I was checking my phone when I heard footsteps behind me.'
              },
              {
                name: 'Past Perfect',
                role: 'เหตุการณ์ที่เกิดก่อนอีกเหตุการณ์',
                form: 'Subject + had + V3',
                uses: ['สิ่งที่เกิดก่อนจุดหลักของเรื่อง', 'เหตุผล/ภูมิหลังของสิ่งที่เกิดตามมา', 'ประสบการณ์ก่อนหน้า (never, already, just)'],
                examples: ['I was nervous because I had forgotten my speech notes.', 'She had never met him before that day.', 'By the time we got home, someone had taken our package.'],
                time: 'when, by the time, after, before',
                model: 'I arrived at the classroom and suddenly realized I had brought the wrong notebook. I had studied the wrong chapter the night before.'
              },
              {
                name: 'Past Perfect Continuous',
                role: 'ระยะเวลา / สาเหตุก่อนจุดในอดีต',
                form: 'Subject + had been + V-ing',
                uses: ['เน้นระยะเวลาก่อนเหตุการณ์ในอดีต: By the time the teacher arrived, we had been waiting for 20 minutes.', 'อธิบายผลในอดีต: He was angry because he had been dealing with problems all day.'],
                examples: [],
                time: 'for, since, all day/night, before, by the time',
                model: 'I felt exhausted yesterday. I had been preparing for my presentation since early morning, and I had been practicing in my room for hours.'
              }
            ],
            footnote: '<b>Past Perfect vs Past Perfect Continuous</b> — ทั้งคู่คือ “อดีตที่เกิดก่อน” แต่ Past Perfect เน้น <b>ผลลัพธ์/ความสำเร็จ</b> (I had finished my homework.) ส่วน Past Perfect Continuous เน้น <b>ระยะเวลา/กระบวนการ</b> (I had been doing my homework for two hours.)'
          },
          {
            type: 'exercise',
            kind: 'fill',
            id: 'u3-l-ex1',
            title: 'Exercise 1 — Past Tense Forms',
            instructions: 'เติมรูปกริยาที่เหมาะสมของคำในวงเล็บ',
            items: [
              { q: '1. I ___ (walk) home when I heard someone call my name.', accept: ['was walking'], explain: 'Past Continuous — กำลังเดินอยู่แล้วถูกขัดจังหวะ (heard)' },
              { q: '2. At 9 p.m. last night, we ___ (discuss) our project in the library.', accept: ['were discussing'], explain: 'Past Continuous — กำลังทำอยู่ ณ เวลาที่ระบุ (At 9 p.m.)' },
              { q: '3. When I arrived at the station, the train ___ (leave) already.', accept: ['had left', 'had already left'], explain: 'Past Perfect — รถไฟออกไปก่อนที่ฉันมาถึง' },
              { q: '4. She was exhausted because she ___ (work) since early morning.', accept: ['had been working'], explain: 'Past Perfect Continuous — ระยะเวลา (since early morning) เป็นสาเหตุของความเหนื่อย' },
              { q: '5. While I was cooking, my brother ___ (knock) on the door.', accept: ['knocked'], explain: 'Past Simple — เหตุการณ์ที่เข้ามาขัดจังหวะ' },
              { q: '6. They ___ (wait) outside for 15 minutes when the teacher finally opened the room.', accept: ['had been waiting'], explain: 'Past Perfect Continuous — เน้นระยะเวลา (for 15 minutes) ก่อนเหตุการณ์ในอดีต' },
              { q: '7. By the time we got to the cinema, the movie ___ (start).', accept: ['had started', 'had already started'], explain: 'Past Perfect — by the time + หนังเริ่มก่อน' },
              { q: '8. He dropped his phone while he ___ (run) to catch the bus.', accept: ['was running'], explain: 'Past Continuous — while + การกระทำที่กำลังเกิด' },
              { q: '9. I didn’t recognize her because I ___ (not/meet) her before.', accept: ['had not met', 'hadn’t met', "hadn't met", 'had never met'], explain: 'Past Perfect (ปฏิเสธ) — ไม่เคยเจอมาก่อนเหตุการณ์นั้น' },
              { q: '10. We ___ (study) for two hours when the power suddenly went out.', accept: ['had been studying'], explain: 'Past Perfect Continuous — ทำต่อเนื่อง 2 ชั่วโมงก่อนไฟดับ' }
            ]
          },
          {
            type: 'exercise',
            kind: 'fill',
            id: 'u3-l-ex2',
            title: 'Exercise 2 — Story: The Wrong Room',
            instructions: 'เติม past tense ที่ถูกต้องลงในเรื่องสั้น',
            intro: '<i>Last Friday at my university, students (1) ___ (wait) outside Room 214, and the teacher was talking to a group near the door. I (2) ___ (run) down the hallway, rushing to my class. When I reached the room, the quiz (3) ___ (begin). I (4) ___ (start) to panic. I stood there when a student whispered, “You are in the wrong class!” Suddenly, I realized that I (5) ___ (arrive) at the wrong room. I (6) ___ (run) out quickly. By the time I reached my class, the teacher told me that I was too late for the quiz. I (7) ___ (feel) shocked because I (8) ___ (study) all week for the quiz I could not take.</i>',
            items: [
              { q: '(1) students ___ (wait) outside Room 214', accept: ['were waiting'], explain: 'ฉากหลัง (คู่กับ “the teacher was talking”)' },
              { q: '(2) I ___ (run) down the hallway, rushing to my class', accept: ['was running'], explain: 'การกระทำที่กำลังเกิดอยู่ (rushing)' },
              { q: '(3) When I reached the room, the quiz ___ (begin).', accept: ['had begun', 'had already begun'], explain: 'Past Perfect — ควิซเริ่มไปก่อนที่ฉันมาถึง' },
              { q: '(4) I ___ (start) to panic.', accept: ['started'], explain: 'Past Simple — เหตุการณ์หลักลำดับถัดไป' },
              { q: '(5) I realized that I ___ (arrive) at the wrong room.', accept: ['had arrived'], explain: 'Past Perfect — มาผิดห้องก่อนที่จะรู้ตัว' },
              { q: '(6) I ___ (run) out quickly.', accept: ['ran'], explain: 'Past Simple — เหตุการณ์หลัก' },
              { q: '(7) I ___ (feel) shocked', accept: ['felt'], explain: 'Past Simple' },
              { q: '(8) because I ___ (study) all week for the quiz', accept: ['had been studying', 'had studied'], explain: 'Past Perfect Continuous — เน้นว่าอ่านต่อเนื่องมาทั้งสัปดาห์ (had studied ก็ยอมรับได้)' }
            ]
          }
        ],

        /* ---------------- WRITING ---------------- */
        writing: [
          {
            type: 'heading',
            eyebrow: 'Writing',
            title: 'Narrative Paragraph',
            subtitle: 'ย่อหน้าเล่าเรื่องตอบคำถาม “What happened?” — เล่าประสบการณ์ในอดีตที่น่าสนใจหรือน่าจดจำ พร้อมรายละเอียด When / Where / Who'
          },
          {
            type: 'freytag',
            title: 'Freytag’s Pyramid — 6 องค์ประกอบของเรื่องเล่า',
            steps: [
              { name: 'Exposition', th: 'ปูเรื่อง', desc: 'บริบทหรือฉาก: ใคร (ตัวละคร) ที่ไหน เมื่อไร', example: 'On a quiet afternoon in a suburban Japanese town, Nobita, a clumsy schoolboy, sat in his small family house struggling with his homework.' },
              { name: 'Inciting incident', th: 'จุดเริ่มปัญหา', desc: 'ความขัดแย้งที่ทำให้เรื่องเริ่มเดิน', example: 'After being bullied at school by Giant and Suneo, Nobita ran home crying and begged Doraemon for help.' },
              { name: 'Rising action', th: 'เรื่องเข้มข้นขึ้น', desc: 'เหตุการณ์ต่อเนื่องที่เพิ่มความตึงเครียดเมื่อตัวละครเจออุปสรรค', example: 'Nobita used the gadget to get revenge… However, Nobita began to misuse the gadget, causing unexpected problems.' },
              { name: 'Climax', th: 'จุดสูงสุด', desc: 'ช่วงตื่นเต้นที่สุด ตึงเครียดที่สุด หรือจุดเปลี่ยน', example: 'The gadget’s effects spiraled out of control, creating chaos that Nobita could no longer handle.' },
              { name: 'Falling action', th: 'คลี่คลาย', desc: 'ความตึงเครียดเริ่มลดลง', example: 'Doraemon deactivated the gadget, slowly restoring things to normal.' },
              { name: 'Resolution', th: 'บทสรุป', desc: 'ปัญหาได้รับการแก้ไข ได้บทเรียน ตัวละครกลับสู่ภาวะปกติแบบใหม่', example: 'Nobita realized that his careless actions caused trouble. He apologized and learned a lesson about responsibility and honesty.' }
            ]
          },
          {
            type: 'exercise',
            kind: 'ranges',
            id: 'u3-w-a1',
            title: 'Writing Activity 1 — Lauren’s Broken Finger',
            instructions: 'ระบุว่าประโยคหมายเลขใดเป็นองค์ประกอบใดของเรื่องเล่า (เลือกช่วงประโยค จาก–ถึง)',
            text: [
              'Recently, I broke my finger in the most ridiculous way possible.',
              'Six days ago, I was in the main library with my friend, Charlie.',
              'He told me that he was going to have an English test.',
              'However, he did not know the meaning of some vocabulary words.',
              'I did not know their meaning, either.',
              'I said I would help him, so I went to get a dictionary.',
              'The dictionary was on the top shelf.',
              'Charlie said he would ask the librarian to help us, but I said I could do it myself.',
              'I climbed on a chair in order to get the dictionary, but as soon as I was close to it, it fell off the shelf and hit my left index finger.',
              'Suddenly, I felt extreme pain in that finger.',
              'I screamed, and Charlie and the librarian immediately ran over to help me.',
              'Charlie, who is studying to be a nurse, checked my finger and told me that it was definitely broken.',
              'The librarian calmly told me that I should have waited for her to get the dictionary.',
              'I had been very reckless, and because of that, I hurt myself.',
              'Due to this incident, I became more cautious.'
            ],
            components: [
              { label: 'Exposition', accept: [[1, 3], [1, 2]], model: '1–3', explain: 'บอกว่าเกิดอะไร (นิ้วหัก) ที่ไหน (ห้องสมุด) ใคร (Charlie) และเรื่องสอบ' },
              { label: 'Inciting incident', accept: [[4, 5], [3, 5], [4, 6]], model: '4–5', explain: 'ปัญหาเริ่ม: ทั้งสองคนไม่รู้ความหมายคำศัพท์' },
              { label: 'Rising action', accept: [[6, 8], [7, 8], [6, 9]], model: '6–8', explain: 'ไปหาพจนานุกรม อยู่ชั้นบนสุด ปฏิเสธความช่วยเหลือ — ความเสี่ยงเพิ่มขึ้น' },
              { label: 'Climax', accept: [[9, 10], [9, 9]], model: '9–10', explain: 'พจนานุกรมหล่นใส่นิ้วและเจ็บมาก — จุดตึงเครียดที่สุด' },
              { label: 'Falling action', accept: [[11, 13], [11, 12]], model: '11–13', explain: 'มีคนมาช่วย ตรวจนิ้ว และบรรณารักษ์ให้คำแนะนำ' },
              { label: 'Resolution', accept: [[14, 15], [15, 15]], model: '14–15', explain: 'ตระหนักว่าประมาท และได้บทเรียน (ระมัดระวังมากขึ้น)' }
            ]
          },
          {
            type: 'passage',
            id: 'u3-w-buffalo',
            title: 'Writing Activity 2 — The Buffalo Costume',
            source: 'Narrative paragraph (267 words)',
            paragraphs: [
              'I made a very good friend during a very embarrassing moment. Five years ago, I was invited to a party by my classmate, Max. He told me that it was a casual party at his apartment. However, I misheard him. I thought he said that the party was a costume party. By the time I arrived at the party, it was too late to go home and change clothes. I was very embarrassed because I was dressed as a buffalo. I had horns, hooves, and a tail that swung back and forth. I felt awkward because everyone else was wearing normal clothes, such as T-shirts and jeans. Max swore it was all right. He insisted that I could stay, but I was very embarrassed. After fifteen minutes, I wanted to go home. All of a sudden, Max happily announced that he had a surprise for me. Another guest had arrived. She was dressed like a Thai farmer! Immediately, everyone laughed. Several party guests asked us to pose for photographs together, and they posted them on social media. People on social media said that they loved our costumes. When we were done taking photographs, the girl who was in the Thai farmer costume and I talked. Her name was Delilah. We had a lot in common. For example, we were both passionate about the ocean. Since that party, we have travelled to many beaches together to help clean them up. I had felt reluctant to stay at that party, but I’m happy I did. From this incident, I met one of the most wonderful people in my life.'
            ],
            plain: true
          },
          {
            type: 'exercise',
            kind: 'short',
            id: 'u3-w-a2',
            title: 'Writing Activity 2 — Questions',
            instructions: 'ตอบคำถามจากย่อหน้า The Buffalo Costume (ภาษาอังกฤษสั้น ๆ)',
            items: [
              { q: '1. When did this incident happen?', keywords: [['five years ago', '5 years ago']], model: 'Five years ago.' },
              { q: '2. Where did this incident happen?', keywords: [['apartment', 'max']], model: 'At a party at Max’s apartment.' },
              { q: '3. Who was involved in this incident?', keywords: [['max'], ['delilah']], model: 'The narrator, Max, Delilah, the other party guests (and people on social media).' },
              { q: '4. What was the inciting incident?', keywords: [['misheard', 'costume', 'buffalo']], model: 'The narrator misheard Max, thought it was a costume party, and arrived dressed as a buffalo while everyone else wore normal clothes.' },
              { q: '5. What did the main character gain at the end of the incident?', keywords: [['friend', 'delilah']], model: 'A wonderful new friend, Delilah (they now clean up beaches together).' }
            ]
          },
          {
            type: 'exercise',
            kind: 'order',
            id: 'u3-w-a3',
            title: 'Writing Activity 3 — Put the Story in Order',
            instructions: 'แตะประโยคตามลำดับที่ถูกต้องเพื่อสร้างย่อหน้าเล่าเรื่อง',
            groups: [
              {
                title: 'Group 1 — Nancy’s Coffee',
                sentences: ['She came home late.', 'She went to a movie with her friends.', 'Her laptop stopped working because coffee spilled on it.', 'She knocked the cup over.', 'She tried to clean up the coffee, but the liquid was everywhere.', 'Last night, Nancy created a huge problem for herself.', 'She put the cup of coffee on her desk next to her computer.', 'She made a cup of coffee so that she could stay awake to do her homework.'],
                answer: [5, 1, 0, 7, 6, 3, 4, 2],
                explain: 'f → b → a → h → g → d → e → c : เปิดด้วยประโยคใจความ แล้วเล่าตามเวลา ไปดูหนัง → กลับดึก → ชงกาแฟ → วางข้างคอม → ทำหก → พยายามเช็ด → แล็ปท็อปเสีย'
              },
              {
                title: 'Group 2 — James’s First Credit Card',
                sentences: ['James called the credit card company to activate the card.', 'He waited for approximately one week for his card to arrive in the mail.', 'He submitted the application online.', 'James wanted to get his first credit card.', 'He got an application on the credit card company website.', 'He filled out the application.', 'He researched the credit card that was best for him.', 'He signed his new card on the back as soon as he received it.'],
                answer: [3, 6, 4, 5, 2, 1, 7, 0],
                explain: 'd → g → e → f → c → b → h → a : อยากได้บัตร → หาข้อมูล → เอาใบสมัคร → กรอก → ส่ง → รอ 1 สัปดาห์ → เซ็นหลังบัตรทันทีที่ได้ → โทรเปิดใช้งาน'
              }
            ]
          },
          {
            type: 'note',
            title: 'Useful Language — Transition Words for Chronological Order',
            tableFirst: true,
            table: {
              columns: ['Function', 'Transitions', 'Example'],
              rows: [
                ['Beginning events', 'first, at first, initially, in the beginning', 'At first, I didn’t notice that my bag was missing.'],
                ['Next / sequence', 'then, next, afterward, after that', 'Then, I ran back to the bus stop.'],
                ['Time passing', 'minutes later, shortly after, a while later, soon', 'Minutes later, I realized what had happened.'],
                ['Simultaneous actions', 'while, as, meanwhile, at the same time', 'While I was searching my pockets, people were staring at me.'],
                ['Cause and effect', 'so, because, as a result, therefore', 'I was in a hurry, so I forgot to check my seat.'],
                ['Unexpected events / contrast', 'suddenly, however, unexpectedly', 'Suddenly, the bus disappeared from view.'],
                ['Climax / peak moment', 'at that moment, just then, without warning', 'At that moment, my phone rang with good news.'],
                ['Ending / resolution', 'finally, in the end, eventually, at last', 'In the end, I got my backpack back.'],
                ['Reflection / lesson', 'afterward, since then, from that day on', 'Since then, I always double-check my belongings.']
              ]
            },
            html: '<p class="tip">💡 Transition words หลายคำตามด้วย comma เช่น <b>Suddenly,</b> <b>In the end,</b> <b>Afterward,</b></p>'
          },
          {
            type: 'note',
            title: 'Useful Language — Prepositions of Place & Reporting Verbs',
            html: `
              <div class="prep-grid">
                <div><span class="prep-tag">in</span><p>I was <b>in</b> Vancouver for a movie premiere.<br>After that, he waited <b>in</b> the living room.</p></div>
                <div><span class="prep-tag">on</span><p>I was <b>on</b> the fifth floor.<br>After that, I was <b>on</b> the bus for two hours.</p></div>
                <div><span class="prep-tag">at</span><p>I tripped on an extension cord <b>at</b> my sister’s house.<br>She ordered croissants <b>at</b> the bakery.<br>We sang along <b>at</b> the concert.</p></div>
              </div>
              <p><b>Reporting verbs</b> — adverb + reporting verb ช่วยให้เรื่องเล่ามีชีวิตชีวา</p>
              <ul>
                <li>The dancer <b>angrily said</b> that he was going to leave.</li>
                <li>The journalist <b>excitedly announced</b> that she was moving to Spain.</li>
                <li>She <b>asked</b> me to help her find her book. · The visitor <b>asked</b> to see the baby penguin.</li>
              </ul>`
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u3-w-a4',
            title: 'Writing Activity 4 — Choose the Transition',
            instructions: 'เลือก transition word ที่เหมาะสมที่สุด',
            items: [
              { q: '1. ___, I didn’t realize my wallet was missing.', options: ['Finally', 'At first', 'As a result', 'Meanwhile'], answer: 1, explain: '“At first” = ในตอนแรก (ยังไม่รู้ตัว) เหมาะกับเหตุการณ์เริ่มต้น' },
              { q: '2. I searched my bag carefully; ___, I checked my jacket pockets.', options: ['in the end', 'suddenly', 'next', 'although'], answer: 2, explain: '“next” บอกลำดับการกระทำถัดไป' },
              { q: '3. ___ I was rushing to catch the bus, I forgot to check my seat.', options: ['While', 'Finally', 'However', 'Later'], answer: 0, explain: '“While” + การกระทำที่กำลังเกิด (was rushing) แสดงเหตุการณ์ที่เกิดพร้อมกัน' },
              { q: '4. I waited nervously at the station; ___, the driver returned with my bag.', options: ['at first', 'meanwhile', 'eventually', 'because'], answer: 2, explain: '“eventually” = ในที่สุด (หลังจากรอ)' },
              { q: '5. ___, I have always checked my bag carefully.', options: ['At that moment', 'Suddenly', 'In the beginning', 'Since then'], answer: 3, explain: '“Since then” + present perfect ใช้สะท้อนบทเรียนที่ทำมาตลอดจนถึงปัจจุบัน' }
            ]
          },
          {
            type: 'exercise',
            kind: 'order',
            id: 'u3-w-a5',
            title: 'Writing Activity 5 — Number the Sentences',
            instructions: 'เรียงประโยค 1–5 ให้เป็นเรื่องที่ต่อเนื่อง แล้วลองเขียนใหม่เป็นย่อหน้าพร้อม transition words ในแบบฝึกถัดไป',
            groups: [
              {
                title: 'The Lost Bag',
                sentences: ['I felt a rush of relief when the driver returned with my bag.', 'I stepped off the bus without checking my seat.', 'I realized my bag was missing a few minutes later.', 'I reported the lost item at the bus terminal.', 'I hurried back to the bus stop in a panic.'],
                answer: [1, 2, 4, 3, 0],
                explain: 'ลงรถ → รู้ว่ากระเป๋าหาย → รีบกลับป้าย → แจ้งที่สถานี → โล่งใจเมื่อคนขับนำกระเป๋ามาคืน'
              }
            ]
          },
          {
            type: 'exercise',
            kind: 'open',
            id: 'u3-w-a5b',
            title: 'Writing Activity 5 — Rewrite as a Paragraph',
            instructions: 'เขียนประโยคข้างบนใหม่เป็นย่อหน้า เพิ่ม transition words ตามความเหมาะสม',
            items: [
              { q: 'Rewritten paragraph:', minWords: 40, highlightTransitions: true, model: 'At first, I stepped off the bus without checking my seat. A few minutes later, I realized my bag was missing. Then, I hurried back to the bus stop in a panic. After that, I reported the lost item at the bus terminal. In the end, I felt a rush of relief when the driver returned with my bag.', checklist: ['เรียงเหตุการณ์ถูกต้อง', 'มี transition words อย่างน้อย 3 คำ', 'ใส่ comma หลัง transition ที่ขึ้นต้นประโยค', 'ใช้ past tense ตลอด'] }
            ]
          },
          {
            type: 'composer',
            id: 'u3-w-quiz',
            title: 'Writing Studio — Narrative Paragraph (Writing Quiz 2 Practice)',
            instructions: 'ฝึกเขียนย่อหน้าเล่าเรื่อง 180–220 คำ ให้มีองค์ประกอบครบ 6 ส่วน ระบบจะนับคำ ไฮไลต์ transition words และเตือนเรื่อง present tense / comma splice ที่อาจหลุดมา',
            min: 180,
            max: 220,
            topics: [
              'Write about an important lesson that you learned.',
              'Write about how someone you know got out of trouble.',
              'Write about the most memorable experience when traveling abroad.',
              'Write about the most frightening experience you have ever had.',
              'What was the most exciting thing that happened to you as a child?',
              'Write about a viral event that happened in your hometown.',
              'Write about the most embarrassing experience you have ever had.',
              'What was the most disappointing thing that has ever happened to you?'
            ],
            checklist: ['Exposition: บอก When / Where / Who', 'Inciting incident ชัดเจน', 'Rising action มีรายละเอียด', 'Climax คือจุดตึงเครียดที่สุด', 'Falling action', 'Resolution / บทเรียน', 'ใช้ past tense อย่างสม่ำเสมอ', 'มี transition words ที่หลากหลาย'],
            rubric: {
              columns: ['Score', 'Task Completion / Content', 'Organization', 'Language'],
              rows: [
                ['5', 'ใจความหลักชัดเจน พัฒนาความคิดครบ มีองค์ประกอบครบ', 'เรียงความคิดเป็นเหตุเป็นผล อ่านลื่น ใช้ transition เหมาะสม', 'คำศัพท์และโครงสร้างหลากหลาย ถูกต้อง ผิดน้อยมาก'],
                ['4', 'ใจความชัด พัฒนาดี / ขาดองค์ประกอบเล็กน้อย', 'เรียงเป็นส่วนใหญ่ transition ใช้ได้แต่อาจดูแข็ง', 'คำศัพท์/โครงสร้างพอเพียง ส่วนใหญ่ไม่ผิด'],
                ['3', 'ใจความไม่ชัด ความคิดจำกัด / ขาดบางองค์ประกอบ', 'ค่อนข้างเป็นลำดับแต่ขาดความต่อเนื่องบางช่วง', 'พยายามใช้หลากหลาย มีข้อผิดพลาดบ้าง'],
                ['2', 'ไม่มีใจความหลัก มีความคิดไม่เกี่ยวข้อง', 'เชื่อมโยงน้อย transition จำกัดหรือผิด', 'คำศัพท์จำกัด ผิดบ่อย'],
                ['1', 'แทบไม่มีองค์ประกอบของย่อหน้า', 'ควบคุมการเรียงย่อหน้าได้น้อยมาก', 'ผิดจนสื่อสารไม่ได้'],
                ['0', 'ไม่เข้าใจ / ไม่เกี่ยวข้อง / ไม่ได้ทำ', 'ไม่มีการเรียงย่อหน้า', 'ไม่มีโครงสร้างภาษาอังกฤษ']
              ]
            }
          }
        ],

        /* ---------------- COMMUNICATION ---------------- */
        communication: [
          {
            type: 'heading',
            eyebrow: 'Communication Activity 1',
            title: 'What is Innovation? And How is it Different from Creativity?',
            subtitle: 'ดูวิดีโอจาก The What Is Project (ลิงก์/QR ในหนังสือ หน้า 96) แล้วทำแบบฝึก'
          },
          {
            type: 'exercise',
            kind: 'tf',
            id: 'u3-c-tf',
            title: 'Video — True or False',
            instructions: 'ตอบ TRUE (T) หรือ FALSE (F) จากวิดีโอ',
            labels: ['TRUE', 'FALSE'],
            items: [
              { q: '1. Innovation is limited to technological developments within the business sector.', answer: 'FALSE', explain: 'นวัตกรรมไม่จำกัดแค่เทคโนโลยีหรือธุรกิจ' },
              { q: '2. Innovation can involve changes in culture as well as products and services.', answer: 'TRUE', explain: 'นวัตกรรมรวมถึงการเปลี่ยนแปลงทางวัฒนธรรม กระบวนการ ผลิตภัณฑ์ และบริการ' },
              { q: '3. Innovation can help address global issues such as climate change and poverty.', answer: 'TRUE', explain: 'วิดีโอยกตัวอย่างปัญหาระดับโลกที่นวัตกรรมช่วยแก้ได้' },
              { q: '4. Creativity and innovation are described as having similar meanings.', answer: 'FALSE', explain: 'สองคำนี้มักใช้แทนกัน แต่วิดีโออธิบายว่าต่างกัน: creativity คือการคิดสิ่งใหม่ ส่วน innovation คือการนำไอเดียไปทำให้เกิดประโยชน์จริง' },
              { q: '5. Both creativity and innovation are said to depend on having a closed and careful mindset.', answer: 'FALSE', explain: 'ทั้งสองต้องอาศัยความคิดที่เปิดกว้าง (open mindset) และกล้าลอง' }
            ]
          },
          {
            type: 'discussion',
            title: 'Discuss in pairs or groups',
            questions: ['How does innovation differ from creativity?', 'What characteristics are required for both creativity and innovation?', 'Can you think of an innovation that has significantly improved your daily life? How?']
          },
          {
            type: 'planner',
            id: 'u3-c-pitch',
            title: 'Communication Activity 2 [5%] — Innovation Pitch',
            intro: 'จับคู่ออกแบบผลิตภัณฑ์ บริการ หรือไอเดียใหม่ที่แก้ปัญหาจริง (การศึกษา สุขภาพ สิ่งแวดล้อม งาน หรือชีวิตประจำวัน) แล้วเตรียม pitch 3 นาที — <i>“Pitching is the act of presenting an idea clearly and persuasively… pitching aims to convince the audience.”</i>',
            fields: [
              { label: '1. What the innovation is', hint: 'Describe your product, service, or idea', sample: 'Our innovation is a mobile app called Smart Study Planner. It uses artificial intelligence to create personalized study schedules for students based on their subjects, deadlines, and study habits.' },
              { label: '2. The problem it solves', hint: 'Explain the real problem or need and why it matters', sample: 'Many students struggle with time management and feel overwhelmed by assignments and exams. They often do not know how to plan their study time effectively, which leads to stress and poor academic performance.' },
              { label: '3. Why it is better than existing solutions', hint: 'Highlight its advantages or unique features', sample: 'Unlike basic calendar apps, Smart Study Planner adjusts schedules automatically when deadlines change. It also sends reminders, suggests break times, and tracks progress.' },
              { label: '4. Possible disadvantages or risks', hint: 'Explain any possible weaknesses or challenges', sample: 'Students may rely too much on the app instead of developing their own planning skills. The app also requires access to personal data, which raises privacy concerns.' }
            ]
          }
        ]
      },

      glossary: [
        { word: 'anticipate', pos: 'verb', th: 'คาดการณ์, คาดไว้ล่วงหน้า', en: 'to imagine or expect that something will happen', example: 'Unlike artificial intelligence, which is only responsive to the data available, humans have the ability to imagine, anticipate, feel, and judge changing situations.' },
        { word: 'congested', pos: 'adjective', th: 'แออัด, (การจราจร) ติดขัด', en: 'crowded; full of traffic', example: 'It is driverless and zips above congested roads, cutting travel time by over 50%.' },
        { word: 'contrary to', pos: 'preposition', th: 'ตรงกันข้ามกับ', en: 'saying or showing the opposite to; in contrast with', example: 'In addition, contrary to humans, AI never gets physically tired and as long as it’s fed data it will keep going.' },
        { word: 'corporate', pos: 'noun', th: 'บริษัทขนาดใหญ่, องค์กร', en: 'a large company', example: 'In a corporate, teams or organizations constantly interact with the external environment and therefore have to deal with influences from outside.' },
        { word: 'determine', pos: 'verb', th: 'กำหนด, ตัดสิน, มีผลโดยตรงต่อ', en: 'to control or influence something directly, or to decide what will happen', example: 'Kasparov himself realized that the strength of the human players is not what determines the winning team.' },
        { word: 'diverse', pos: 'adjective', th: 'หลากหลาย', en: 'very different from each other and of various kinds', example: 'For residents and visitors, every new line means shorter commute times, less money spent on taxis or fuel, and easier access to explore Bangkok’s diverse neighbourhoods.' },
        { word: 'dramatically', pos: 'adverb', th: 'อย่างมาก, อย่างก้าวกระโดด', en: 'very suddenly and to a very great and often surprising degree', example: 'In 2023, two new rapid transit lines opened, dramatically expanding the city’s rail network.' },
        { word: 'efficient', pos: 'adjective', th: 'มีประสิทธิภาพ', en: 'working well without wasting time, money, or energy', example: 'They were “providing a faster and more efficient way for people to travel between the city’s major districts.”' },
        { word: 'extension', pos: 'noun', th: 'ส่วนต่อขยาย, การขยาย', en: 'the act of increasing the area of activity, group of people, etc. that is affected by something', example: 'Future projects, such as the planned Light Blue Line and extensions of existing lines, are also being developed.' },
        { word: 'implementation', pos: 'noun', th: 'การนำ(แผน/ระบบ)ไปใช้, การดำเนินการ', en: 'the act of starting to use a plan or system', example: 'New technology always has disruptive effects early on in the implementation and development phases.' },
        { word: 'integrate', pos: 'verb', th: 'ผสานรวม, เชื่อมเข้าด้วยกัน', en: 'to combine two or more things so that they work together', example: 'The Pink Line is designed to integrate with five other transit lines as well.' },
        { word: 'neighborhood', alts: ['neighbourhood'], pos: 'noun', th: 'ย่าน, ละแวกบ้าน', en: 'an area of town or city where people live', example: 'It serves neighborhoods along the eastern ring road and connects with existing MRT/BTS lines at key points.' },
        { word: 'notorious', pos: 'adjective', th: 'ขึ้นชื่อในทางไม่ดี, ฉาวโฉ่', en: 'well-known for being bad', example: 'Bangkok’s notorious traffic jams are getting some relief thanks to new mass transit lines.' },
        { word: 'prominent', pos: 'adjective', th: 'โดดเด่น, มีชื่อเสียงและสำคัญ', en: 'very well-known and important', example: 'Sabermetrics, the use of statistics in baseball to project a player’s performance and career, is one such prominent example.' },
        { word: 'repetitive', pos: 'adjective', th: 'ซ้ำซาก, ทำซ้ำ ๆ', en: 'involving doing or saying the same thing several times', example: 'AI is perfectly suited to put to work on lower-level routine tasks that are repetitive.' },
        { word: 'resident', pos: 'noun', th: 'ผู้อยู่อาศัย', en: 'a person who lives in a particular place or who has their home there', example: 'These are modern monorails that now link areas of the city that previously had no train service, giving residents more convenient travel options.' },
        { word: 'sophisticated', pos: 'adjective', th: 'ซับซ้อน, ล้ำสมัย', en: 'advanced or complex', example: 'AI1 is generally based on machine learning methods, which involve analysing large amounts of information using powerful computers and sophisticated algorithms.' },
        { word: 'spacious', pos: 'adjective', th: 'กว้างขวาง', en: 'large and with plenty of space for people to move around in', example: 'An IT professional could live in a more spacious apartment in Nonthaburi or along Srinakarin Road.' },
        { word: 'strategy', pos: 'noun', th: 'กลยุทธ์, แผนการ', en: 'a detailed plan to achieve a particular goal', example: 'Such work settings require the ability to anticipate and manage sudden changes, while also being creative in clarifying a vision and future strategy.' },
        { word: 'superior', pos: 'adjective', th: 'เหนือกว่า, ดีกว่า', en: 'better than someone or something else', example: 'Now, artificial intelligence is already superior to humans in a number of tasks.' }
      ]
    },

    /* ======================================================
       UNIT 4
       ====================================================== */
    {
      id: 'u4',
      number: 4,
      title: 'Life Below Water & Life on Land',
      titleTh: 'ชีวิตใต้น้ำและชีวิตบนบก',
      emoji: '🐙',
      pages: 'หน้า 101–144',
      sections: {
        /* ---------------- READING ---------------- */
        reading: [
          {
            type: 'heading',
            eyebrow: 'Reading Skills',
            title: 'Making Inferences',
            subtitle: 'การอนุมาน — สรุปความจากเบาะแสในบทอ่าน ในสิ่งที่ไม่ได้บอกไว้ตรง ๆ'
          },
          {
            type: 'note',
            title: 'Inference คืออะไร?',
            html: `
              <blockquote>The dumbo octopus lives in the deep sea, sometimes more than 13,000 feet below the surface. It is known for its ear-like fins, which make it appear to “fly” as it moves. Unlike most octopuses, it relies on slow, gentle fin strokes instead of strong jet movements. Its soft, gelatinous, and sometimes translucent body helps it survive the high pressure of its deep-ocean habitat.</blockquote>
              <ol>
                <li><b>The dumbo octopus conserves energy.</b><br><span class="muted">Evidence: การเคลื่อนไหวช้า ๆ แสดงว่าไม่สิ้นเปลืองพลังงาน ซึ่งสำคัญในทะเลลึกที่อาหารหายาก</span></li>
                <li><b>It is well adapted to extreme environments.</b><br><span class="muted">Evidence: ร่างกายนิ่มคล้ายเจลลี่บ่งบอกว่าวิวัฒนาการมาเพื่อทนแรงดันมหาศาล</span></li>
                <li><b>It likely has few natural predators.</b><br><span class="muted">Evidence: อยู่ลึกมากและเคลื่อนไหวสบาย ๆ แปลว่าอาจไม่ต้องหนีเร็ว</span></li>
              </ol>
              <p>ตาม Cambridge Dictionary, inference คือ <i>“a guess that you make or an opinion that you form based on the information that you have.”</i> เช่น ถ้าเพื่อนตั้งรูปนกอีมูเป็นหน้าจอ ใส่เสื้อลายอีมู และนอนกอดตุ๊กตาอีมู เราก็อนุมานได้ว่าสัตว์ที่ชอบที่สุดคือนกอีมู</p>
              <p class="tip">⚠️ <b>Inference ≠ Paraphrase</b> — paraphrase คือเรียบเรียงความเดิมด้วยคำของเรา ส่วน inference คือการสรุปสิ่งที่ <b>ไม่ได้เขียนไว้ตรง ๆ</b> จากเบาะแสในบทอ่าน</p>`
          },
          {
            type: 'passage',
            id: 'u4-dumbo',
            title: 'The Dumbo Octopus',
            source: 'Adapted from nationalgeographic.com',
            paragraphs: ['This octopus feeds on small animals such as snails, worms, and crustaceans. It usually hovers close to the seafloor and swallows prey whole, without much struggle. Its reproductive habits are unusual, as females can carry eggs of different ages and may release them throughout the year. After hatching, the young are already capable of surviving on their own. Because it lives in such remote and dark parts of the ocean, the dumbo octopus is rarely seen. Its quiet movements, unique shape, and ability to survive intense pressure make it one of the most mysterious and resilient animals in the deep sea.']
          },
          {
            type: 'exercise',
            kind: 'open',
            id: 'u4-r-inf1',
            title: 'Exercise 1 — Make Your Own Inferences',
            instructions: 'ตัวอย่าง — <b>Inference:</b> The dumbo octopus does not need to chase fast-moving prey. <b>Evidence:</b> It swallows small animals whole and with little effort. เขียน inference ของคุณเอง 2 ข้อพร้อมหลักฐาน',
            items: [
              { q: 'Inference 1 + Evidence', model: 'Inference: Dumbo octopus parents probably do not need to take care of their young. Evidence: After hatching, the young are already capable of surviving on their own.', checklist: ['เป็นข้อสรุปที่ไม่ได้เขียนไว้ตรง ๆ', 'อ้างหลักฐานจากบทอ่าน', 'ไม่ใช่แค่ paraphrase'] },
              { q: 'Inference 2 + Evidence', model: 'Inference: Scientists still know relatively little about the dumbo octopus. Evidence: It lives in remote, dark parts of the ocean, is rarely seen, and is described as one of the most mysterious animals in the deep sea.', checklist: ['เป็นข้อสรุปที่ไม่ได้เขียนไว้ตรง ๆ', 'อ้างหลักฐานจากบทอ่าน', 'ไม่ใช่แค่ paraphrase'] }
            ]
          },
          {
            type: 'passage',
            id: 'u4-capybara',
            title: 'The Capybara',
            source: 'Adapted from animalia.bio',
            paragraphs: ['The capybara (Hydrochoerus hydrochaeris) is a giant rodent native to South America. It is the largest living rodent and a member of the genus Hydrochoerus. Capybaras are social animals, forming family units of 10-30 animals, although group size often depends on the environment. Thus, during the dry season, when the animals gather at shrinking pools, temporary groups of up to 100 individuals can be observed. A typical family group of capybaras consists of one dominant male, one or more subordinate males, one or more related females as well as offspring of different ages. In contrast, some males tend to be more solitary. Adult individuals of the group participate in defending their territory against outsiders, scent-marking their range. Being crepuscular, capybaras spend the daytime hours resting and are active in the morning and evening. However, in areas where humans threaten them, they usually tend to be nocturnal instead. When threatened, these animals are known to flee, either running over land or diving into the water.']
          },
          {
            type: 'exercise',
            kind: 'tf',
            id: 'u4-r-capy',
            title: 'Exercise 2 — True / False / Not Implied',
            instructions: 'TRUE = กล่าวไว้หรืออนุมานได้ชัดเจน · FALSE = ขัดกับบทอ่าน · NOT IMPLIED = ไม่ได้กล่าวและอนุมานไม่ได้ (ห้ามใช้ความรู้รอบตัว)',
            labels: ['TRUE', 'FALSE', 'NOT IMPLIED'],
            items: [
              { q: '1. Capybaras depend on water as part of their natural environment.', answer: 'TRUE', explain: 'พวกมันรวมตัวที่แอ่งน้ำในหน้าแล้ง และหนีภัยด้วยการดำน้ำ' },
              { q: '2. Capybaras usually live alone and avoid social interaction.', answer: 'FALSE', explain: '“Capybaras are social animals, forming family units of 10-30 animals”' },
              { q: '3. Capybaras may change their daily activity patterns when humans threaten them.', answer: 'TRUE', explain: '“in areas where humans threaten them, they usually tend to be nocturnal instead”' },
              { q: '4. All male capybaras live separately from family groups.', answer: 'FALSE', explain: 'ครอบครัวมี dominant male และ subordinate males — มีแค่ “some males” ที่อยู่ลำพัง' },
              { q: '5. Large capybara groups during the dry season suggest that water becomes scarce.', answer: 'TRUE', explain: 'รวมกลุ่มใหญ่ที่ “shrinking pools” — น้ำลดลงจึงต้องมาอยู่แหล่งน้ำเดียวกัน' },
              { q: '6. Capybaras can recognize members of their family group by smell.', answer: 'NOT IMPLIED', explain: 'บทอ่านบอกแค่ว่าพวกมันทำ scent-marking อาณาเขต ไม่ได้บอกว่าจำสมาชิกครอบครัวด้วยกลิ่น' }
            ]
          },
          {
            type: 'heading',
            eyebrow: 'Reading Text 1',
            title: 'Why the Amazon Rainforest Matters',
            subtitle: 'Terrestrial ecosystems — ระบบนิเวศบนบกที่อุณหภูมิ ปริมาณฝน และดิน มีผลต่อการอยู่รอดของสิ่งมีชีวิต'
          },
          {
            type: 'exercise',
            kind: 'match',
            id: 'u4-r-eco',
            title: 'Warm-up 1 — Terrestrial Ecosystems',
            instructions: 'จับคู่ระบบนิเวศกับคำอธิบาย',
            left: ['🌳 Forest ecosystem', '🌾 Grassland ecosystem', '🏜️ Desert ecosystem', '🧊 Tundra ecosystem'],
            right: [
              'A. Extremely low rainfall (usually < 25 cm per year), very limited plant life, dramatic temperature changes — can be extremely hot or extremely cold.',
              'B. Dominated by tall plants and thick undergrowth; covers a large portion of land; includes tropical regions with heavy rainfall and colder regions with cone-bearing trees.',
              'C. Long, harsh winters and short, cool summers; very low precipitation that usually falls as snow; found at high latitudes and high mountains.',
              'D. Wide open spaces covered by short plants; not enough water or nutrients for large plants; may gradually transform into a tree-dominated environment.'
            ],
            answer: [1, 3, 0, 2],
            explain: 'Forest = B · Grassland = D · Desert = A · Tundra = C'
          },
          {
            type: 'discussion',
            title: 'Can You Guess? + Let’s Watch: Why we need biodiversity (Sir David Attenborough)',
            questions: ['Which ecosystem do you think is the most challenging for animals to survive in? Why?', 'Which ecosystem might change the fastest if global temperatures rise?', 'Which ecosystem would be the hardest for humans to live in?', 'What are some of the major causes that affect biodiversity?', 'What can we do to help preserve biodiversity in a more sustainable way?']
          },
          {
            type: 'exercise',
            kind: 'match',
            id: 'u4-r-vocab',
            title: 'Warm-up 2 — Match Words with Meanings',
            instructions: 'จับคู่คำศัพท์ (A–J) กับความหมาย (1–10)',
            left: ['A. Keystone species', 'B. Under siege', 'C. Stabilize', 'D. Primate', 'E. Deforestation', 'F. Habitat', 'G. Unsustainable', 'H. Indigenous', 'I. Overlap', 'J. Threats'],
            right: ['1. Cutting down or clearing large areas of forest', '2. A type of mammal such as monkeys and apes', '3. Cannot continue for long without causing damage', '4. An animal whose role is so important that an ecosystem depends on it', '5. Things that can cause harm or danger', '6. To make something steady or balanced', '7. A place where a plant or animal naturally lives', '8. When two areas or situations share the same space', '9. Being attacked or pressured from many sides', '10. Originally from a place; naturally belonging to a region'],
            answer: [3, 8, 5, 1, 0, 6, 2, 9, 7, 4],
            explain: 'A–4 · B–9 · C–6 · D–2 · E–1 · F–7 · G–3 · H–10 · I–8 · J–5'
          },
          {
            type: 'passage',
            id: 'u4-text1',
            title: 'WHY THE AMAZON RAINFOREST MATTERS',
            source: 'Adapted from wwf.org.uk',
            didYouKnow: ['The Amazon has more species of primate than anywhere else on Earth.', 'You can find more types of ant on one tree in the Amazon than you can in some whole countries.', '47 million people live in the Amazon, including around 2.2 million indigenous people, speaking around 300 different languages.'],
            paragraphs: [
              'South America’s Amazon contains nearly a third of all the tropical rainforests left on Earth. Despite covering only around 1% of the planet’s surface, <span class="gap">(A) ________</span>. It is the stronghold of jaguars and river dolphins, with over 70% of jaguars living in the Amazon. This place is the main hope for the species’ long term survival.',
              'Research shows that, on average, a ‘new’ species of animal or plant is being discovered in the Amazon every other day. <span class="gap">(B) ________</span>. This precious ecosystem is under increasing threat from huge-scale farming and ranching, infrastructure and urban development, unsustainable logging, mining and climate change.',
              'The Amazon is of vital importance because people around the world, as well as locally, depend on the rainforest. Not just for food, water, wood and medicines, but to help stabilize the climate, 150-200 billion tons of carbon is stored in the Amazon. <span class="gap">(C) ________</span>.',
              'The Amazon is under siege like never before. Deforestation and fires remain dangerously high, and protected areas and indigenous lands face increasing threats. It needs our help more than ever. We cannot tackle the climate crisis without the Amazon’s vital life-sustaining role.',
              'Two keystone species of the Amazon, the jaguar and the river dolphin, move across wide areas that span several countries. To help them survive, their habitats must stay connected and protected. <span class="gap">(D) ________</span>. A recent study led by the World Wide Fund for Nature (WWF) brought these two areas together by identifying regions where high jaguar populations overlap with areas rich in migratory freshwater species, including river dolphins.',
              'This approach helps scientists determine where new protected areas would be most effective and where development projects, such as dams or roads, should be avoided. Protecting these key regions helps maintain healthy forests, free-flowing rivers, and stable food webs.'
            ]
          },
          {
            type: 'exercise',
            kind: 'match',
            id: 'u4-r1-a1',
            title: 'Reading Activity 1 — Fill the Gaps (A–D)',
            instructions: 'เลือกประโยค (1–4) ที่เหมาะกับช่องว่าง A–D ในบทอ่านมากที่สุด',
            left: ['Gap (A)', 'Gap (B)', 'Gap (C)', 'Gap (D)'],
            right: [
              '1. The trees in the Amazon also release 20 billion tons of water into the atmosphere each day, playing a critical role in global and regional carbon and water cycles.',
              '2. However, conservation planning for land and freshwater ecosystems is often done separately.',
              '3. However, tragically, because huge parts of the rainforest are being destroyed so quickly, we may never know all the riches it holds.',
              '4. The Amazon rainforest is home to 10% of all known wildlife species – and probably many that we do not know about yet.'
            ],
            answer: [3, 2, 0, 1],
            explain: '(A)–4: “Despite covering only 1%… home to 10% of all known wildlife” · (B)–3: ค้นพบชนิดใหม่ทุกสองวัน “However… we may never know all the riches” · (C)–1: ต่อจากเรื่องคาร์บอนกับวัฏจักรน้ำ/คาร์บอน · (D)–2: “these two areas” ในประโยคถัดไปหมายถึง land & freshwater planning'
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u4-r1-a2',
            title: 'Reading Activity 2 — Inference Questions',
            instructions: 'ตอบคำถามจาก Reading Text 1',
            items: [
              { q: '1. What is the main idea of the text?', options: ['The Amazon rainforest is important mainly because it contains many newly discovered species.', 'The Amazon plays a key role in supporting biodiversity and regulating global systems, but this role is increasingly threatened.', 'Scientific research in the Amazon focuses on protecting keystone species such as jaguars and river dolphins.', 'Environmental problems in the Amazon are largely caused by climate change and natural disasters.'], answer: 1, explain: 'บทอ่านครอบคลุมทั้งความหลากหลายทางชีวภาพ บทบาทต่อสภาพภูมิอากาศ และภัยคุกคามที่เพิ่มขึ้น' },
              { q: '2. The text says a new species is discovered in the Amazon every other day. What can we infer from this?', options: ['Scientists have fully documented all Amazon wildlife.', 'The Amazon still contains many unknown species.', 'Wildlife discovery in the Amazon is slowing down.', 'All new species are large animals.'], answer: 1, explain: 'ยังค้นพบชนิดใหม่อย่างต่อเนื่อง แปลว่ายังมีอีกมากที่ไม่รู้จัก' },
              { q: '3. In Paragraph [2], the text mentions large-scale farming and development destroying the rainforest. What can we infer about future biodiversity if this continues?', options: ['Biodiversity will remain stable.', 'More species will move to cities for survival.', 'Many species may disappear before they are even discovered.', 'The rainforest will grow back naturally and quickly.'], answer: 2, explain: '“we may never know all the riches it holds” — สูญพันธุ์ก่อนถูกค้นพบ' },
              { q: '4. In Paragraph [4], the text says the Amazon is “under siege like never before.” What can we infer from this expression?', options: ['The Amazon has always been completely safe.', 'The rainforest is currently experiencing fewer problems.', 'The situation is exaggerated and not a real concern.', 'The threats to the Amazon today are more severe than in the past.'], answer: 3, explain: '“like never before” = หนักกว่าที่เคยเป็นมา' },
              { q: '5. The study links jaguar habitats with areas rich in migratory freshwater species. What does this suggest about conservation?', options: ['Land and river ecosystems affect each other.', 'Protecting rivers does not help land animals.', 'Jaguars only live near water.', 'Conservation efforts should focus only on aquatic animals.'], answer: 0, explain: 'การวางแผนอนุรักษ์บนบกและแหล่งน้ำจืดร่วมกันได้ผลดีกว่า เพราะระบบนิเวศทั้งสองเชื่อมโยงกัน' }
            ]
          },
          {
            type: 'heading',
            eyebrow: 'Reading Text 2',
            title: 'An Undiscovered Deep-Sea Ecosystem',
            subtitle: 'Warm-up: ออกแบบสิ่งมีชีวิตที่อยู่รอดได้ในความมืดสนิท แรงดันน้ำมหาศาล และอุณหภูมิเย็นจัด — มันได้พลังงานจากไหน อยู่ที่ไหน และมีการปรับตัวอะไร?'
          },
          {
            type: 'passage',
            id: 'u4-text2',
            title: 'SCIENTISTS SAY THEY CRUISED THE OCEAN IN A DEEP-SEA SUBMERSIBLE AND CAME ACROSS AN UNDISCOVERED ECOSYSTEM',
            source: 'Adapted from edition.cnn.com',
            paragraphs: [
              'Scientists have uncovered remarkable ecosystems in the extreme depths of the ocean, nearly 10,000 metres below the surface. These deep-sea trenches, including the Kuril–Kamchatka and Aleutian regions, are among the least explored parts of the planet, yet they host dense communities of marine life thriving in complete darkness. Using a manned submersible, researchers observed large colonies of tubeworms, clams, mollusks, crustaceans, sea cucumbers, and other invertebrates. These communities are striking for their size, density, and diversity, demonstrating that life can flourish even under intense pressure and near-freezing temperatures.',
              'Unlike surface ecosystems that rely on sunlight for energy, these deep-sea organisms survive through chemosynthesis. Microbes in the sediment convert chemicals such as methane and hydrogen sulfide into energy, which tubeworms and mollusks then use to grow and sustain themselves. This process forms the foundation of a food web completely independent of sunlight. Observations revealed tubeworms reaching up to 30 centimetres in length and dense beds of clams and other invertebrates, highlighting the productivity and complexity of these remote habitats.',
              'These discoveries challenge earlier assumptions that life at such depths primarily depends on organic material sinking from the ocean surface. The evidence shows that entire ecosystems can exist using energy produced locally through chemical reactions. This demonstrates the adaptability of life in extreme environments and suggests that deep-sea trenches may be far more biologically active than previously thought.',
              'Beyond revealing astonishing biodiversity, the findings have important implications for Earth’s global systems. Deep-sea trenches may play a significant role in storing and cycling carbon and methane, influencing climate regulation in ways scientists are only beginning to understand. The discovery also raises intriguing possibilities for studying life in extreme conditions, which could inform research on other planets or moons where sunlight is scarce but chemical energy might support ecosystems.',
              'These deep-sea ecosystems remind us that much of our planet remains unexplored. Life has found ways to adapt to environments once considered uninhabitable, surviving under crushing pressure, near-freezing temperatures, and complete darkness. The deep-sea trenches stand as evidence of the resilience and ingenuity of life on Earth, offering new insights into biology, geology, and the interconnectedness of global ecosystems.'
            ]
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u4-r2-a1',
            title: 'Reading Activity 1 — Comprehension',
            instructions: 'ตอบคำถามจาก Reading Text 2',
            items: [
              { q: '1. What makes the deep-sea trenches described in the passage especially remarkable?', options: ['They are located close to coastal regions.', 'They are completely barren and lack marine organisms.', 'They receive limited sunlight and moderate temperatures.', 'They host diverse ecosystems despite extreme conditions.'], answer: 3, explain: '“dense communities… thriving in complete darkness… under intense pressure and near-freezing temperatures”' },
              { q: '2. How do deep-sea organisms obtain energy without sunlight?', options: ['By storing energy from volcanic heat', 'By relying on organic matter sinking from the surface', 'Through chemosynthesis carried out by microbes', 'By feeding on plants that grow on the ocean floor'], answer: 2, explain: '“Microbes in the sediment convert chemicals such as methane and hydrogen sulfide into energy”' },
              { q: '3. Which of the following organisms was observed living in these deep-sea ecosystems?', options: ['Sharks and whales', 'Seaweed and algae', 'Coral reefs and tropical fish', 'Tubeworms, clams, and crustaceans'], answer: 3, explain: '“large colonies of tubeworms, clams, mollusks, crustaceans, sea cucumbers”' },
              { q: '4. What earlier assumption about deep-sea life is challenged by these discoveries?', options: ['Deep-sea animals cannot survive cold temperatures.', 'Life in the deep sea depends on surface-derived organic material.', 'Deep-sea trenches are geologically inactive.', 'Microbes cannot survive under high pressure.'], answer: 1, explain: '“challenge earlier assumptions that life at such depths primarily depends on organic material sinking from the ocean surface”' }
            ]
          },
          {
            type: 'exercise',
            kind: 'open',
            id: 'u4-r2-a2',
            title: 'Reading Activity 2 — Your Own Inferences (Paragraphs 1–2)',
            instructions: 'ตอบด้วยการอนุมานของตัวเอง ห้ามคัดลอกประโยคจากบทอ่านตรง ๆ',
            items: [
              { q: '1. Why might scientists have been surprised to find dense communities of organisms in the deep-sea trenches?', model: 'Because the trenches are dark, freezing, and under huge pressure, scientists probably expected very little life there, not large and crowded communities.' },
              { q: '2. What can you infer about the role of chemosynthetic microbes in the survival of other deep-sea organisms?', model: 'The microbes are essential: without them turning chemicals into energy, tubeworms and mollusks would have no food source, so the whole food web would collapse.' },
              { q: '3. Why do the tubeworms’ size and the density of clams suggest that these ecosystems are highly productive?', model: 'Large animals and crowded beds can only grow if there is a steady and plentiful supply of energy, so the ecosystem must produce a lot of energy locally.' },
              { q: '4. What does the discovery of these ecosystems imply about life’s ability to adapt to extreme environments?', model: 'It implies that life is extremely adaptable and can find new ways to get energy and survive even where conditions seem impossible.' },
              { q: '5. Why might researchers choose to continue exploring trenches after these findings?', model: 'Because many trenches are still unexplored and may contain new species, new energy systems, and information about climate and even life on other planets.' }
            ]
          },
          {
            type: 'exercise',
            kind: 'tf',
            id: 'u4-r2-a3',
            title: 'Reading Activity 3 — True / False with Explanation (Paragraphs 3–5)',
            instructions: 'ตัดสิน True หรือ False จากสิ่งที่อนุมานได้ แล้วอ่านคำอธิบาย (ข้อ 1 คือตัวอย่างในหนังสือ)',
            labels: ['TRUE', 'FALSE'],
            items: [
              { q: '1. The discoveries suggest that deep-sea ecosystems are more self-sustaining than scientists once believed.', answer: 'TRUE', explain: 'They rely on locally produced chemical energy, not surface material.' },
              { q: '2. Deep-sea trenches likely have no influence on Earth’s climate systems.', answer: 'FALSE', explain: 'Trenches “may play a significant role in storing and cycling carbon and methane, influencing climate regulation.”' },
              { q: '3. The findings imply that life could not survive on planets or moons without sunlight.', answer: 'FALSE', explain: 'The opposite — chemical energy “might support ecosystems” where sunlight is scarce.' },
              { q: '4. Scientists fully understand how deep-sea trenches function and affect global systems.', answer: 'FALSE', explain: 'Scientists “are only beginning to understand,” and much of the planet “remains unexplored.”' },
              { q: '5. The deep-sea discoveries indicate that extreme environments can still support complex ecosystems.', answer: 'TRUE', explain: 'Dense, diverse communities survive crushing pressure, near-freezing temperatures, and complete darkness.' }
            ]
          },
          {
            type: 'discussion',
            title: 'Discussion — Imagine you were on the expedition',
            questions: ['What surprised you most about the discovery?', 'Why is this discovery important?', 'What questions do you still have?']
          }
        ],

        /* ---------------- LANGUAGE FOCUS ---------------- */
        language: [
          {
            type: 'heading',
            eyebrow: 'Language Focus',
            title: 'Relative Clauses',
            subtitle: 'Relative clause (adjective clause) เป็น dependent clause ที่ให้ข้อมูลเพิ่มเกี่ยวกับคำนาม ช่วยรวมประโยคสั้น ๆ หลายประโยคให้กระชับและลื่นไหล'
          },
          {
            type: 'note',
            title: 'Relative Pronouns',
            tableFirst: true,
            table: {
              columns: ['Pronoun', 'Stands for', 'Uses'],
              rows: [
                ['who', 'people', 'แทนประธานหรือกรรม (he, she, we, they)'],
                ['whom', 'people', 'แทนกรรม (him, her, us, them) — ทางการกว่า มักใช้ who แทนในภาษาพูด'],
                ['whose', 'people or things', 'แทนความเป็นเจ้าของ (his, hers, ours, theirs)'],
                ['that', 'people or things', 'เป็นประธานหรือกรรมได้ · ใช้ได้ <b>เฉพาะ restrictive clause</b>'],
                ['which', 'things', 'เป็นประธานหรือกรรมได้ · ใช้ใน non-restrictive clause ได้']
              ]
            },
            html: `
              <p><b>ตัวอย่างการรวมประโยค</b></p>
              <ul class="combine-list">
                <li><span>The Amazon rainforest stores a huge amount of carbon. + The Amazon rainforest helps regulate the global climate.</span><b>→ The Amazon rainforest, <mark>which stores a huge amount of carbon</mark>, helps regulate the global climate.</b></li>
                <li><span>Scientists discovered ecosystems in deep-sea trenches. + These ecosystems exist without sunlight.</span><b>→ Scientists discovered ecosystems in deep-sea trenches <mark>that exist without sunlight</mark>.</b></li>
                <li><span>The Amazon is home to many Indigenous communities. + These communities depend on the forest for survival.</span><b>→ The Amazon is home to many Indigenous communities <mark>who depend on the forest for survival</mark>.</b></li>
              </ul>`
          },
          {
            type: 'note',
            title: 'Types of Relative Clauses',
            html: `
              <div class="rc-types">
                <div class="rc-type">
                  <h4>1. Restrictive <small>(ไม่มี comma)</small></h4>
                  <p>ให้ข้อมูล <b>จำเป็น</b> เพื่อระบุว่าหมายถึงใคร/อะไร ถ้าตัดออกความหมายจะไม่ชัด</p>
                  <ul>
                    <li>Students <mark>who study regularly</mark> usually perform better on exams.</li>
                    <li>The teacher <mark>whom the students respect</mark> has many years of experience.</li>
                    <li>The researcher <mark>whose work influenced the field</mark> received an award.</li>
                    <li>The book <mark>that explains the theory clearly</mark> is very popular.</li>
                  </ul>
                </div>
                <div class="rc-type">
                  <h4>2. Non-restrictive <small>(มี comma คั่น)</small></h4>
                  <p>ให้ข้อมูล <b>เสริม</b> ที่ไม่จำเป็น ตัดออกแล้วประโยคยังสมบูรณ์ — <b>ห้ามใช้ that</b></p>
                  <ul>
                    <li>My professor, <mark>who has published many articles</mark>, is speaking at the conference.</li>
                    <li>The author, <mark>whom I met last year</mark>, signed my book.</li>
                    <li>The student, <mark>whose presentation won first prize</mark>, received a scholarship.</li>
                    <li>The laptop, <mark>which was very expensive</mark>, stopped working after a year.</li>
                  </ul>
                </div>
                <div class="rc-type">
                  <h4>3. Reduced <small>(ย่อให้สั้นลง)</small></h4>
                  <p>ย่อได้เฉพาะ relative pronoun ที่เป็น <b>ประธาน</b> — ตัด who/which/that + be ออก หรือเปลี่ยนกริยาเป็น -ing</p>
                  <ul>
                    <li>The students <s>who are</s> preparing for the exam feel stressed.</li>
                    <li>The book <s>that is</s> written for beginners is popular.</li>
                    <li>The article <s>which explains</s> → <mark>explaining</mark> the theory is easy to read.</li>
                    <li>✘ <b>whom</b> และ <b>whose</b> ย่อไม่ได้ (แต่ละ object pronoun ได้: The person I met yesterday…)</li>
                  </ul>
                </div>
              </div>`
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u4-l-pick',
            title: 'Warm-up — Choose the Relative Pronoun',
            instructions: 'เลือก relative pronoun ที่ถูกต้อง (ประโยคจากตัวอย่างในหนังสือ)',
            items: [
              { q: 'The researcher ___ work influenced the field received an award.', options: ['who', 'whose', 'which', 'whom'], answer: 1, explain: 'แสดงความเป็นเจ้าของ (his/her work) → whose' },
              { q: 'My professor, ___ has published many articles, is speaking at the conference.', options: ['that', 'which', 'who', 'whose'], answer: 2, explain: 'คน + เป็นประธาน + non-restrictive (มี comma) → who (ห้ามใช้ that)' },
              { q: 'The laptop, ___ was very expensive, stopped working after a year.', options: ['that', 'which', 'who', 'whom'], answer: 1, explain: 'สิ่งของใน non-restrictive clause → which (that ใช้ไม่ได้เมื่อมี comma)' },
              { q: 'The author, ___ I met last year, signed my book.', options: ['whom', 'whose', 'which', 'that'], answer: 0, explain: 'คน + เป็นกรรมของ met + non-restrictive → whom' },
              { q: 'Jaguars, ___ play an important role in maintaining ecosystem balance, are a keystone species.', options: ['who', 'whose', 'which', 'that'], answer: 2, explain: 'สัตว์ (สิ่ง) + non-restrictive → which' },
              { q: 'River dolphins live in freshwater systems ___ are threatened by dams and pollution.', options: ['who', 'whose', 'whom', 'that'], answer: 3, explain: 'สิ่ง + restrictive clause → that (หรือ which)' }
            ]
          },
          {
            type: 'exercise',
            kind: 'rewrite',
            id: 'u4-l-ex1',
            title: 'Exercise 1 — Combine with a Relative Clause',
            instructions: 'รวมประโยคแต่ละคู่ให้เป็นประโยคเดียวโดยใช้ relative clause',
            items: [
              { q: 'The article discusses climate change. / The article was published last year.', accept: ['The article that was published last year discusses climate change.', 'The article which was published last year discusses climate change.', 'The article, which was published last year, discusses climate change.', 'The article published last year discusses climate change.', 'The article that discusses climate change was published last year.', 'The article which discusses climate change was published last year.', 'The article, which discusses climate change, was published last year.'], model: 'The article that/which was published last year discusses climate change.' },
              { q: 'She is the professor. / The professor’s research focuses on language policy.', accept: ['She is the professor whose research focuses on language policy.'], model: 'She is the professor whose research focuses on language policy.', explain: '“The professor’s research” แสดงความเป็นเจ้าของ → whose' },
              { q: 'I spoke to a student. / I had met the student during orientation.', accept: ['I spoke to a student whom I had met during orientation.', 'I spoke to a student who I had met during orientation.', 'I spoke to a student that I had met during orientation.', 'I spoke to a student I had met during orientation.'], model: 'I spoke to a student whom (who/that) I had met during orientation.' },
              { q: 'The device was expensive. / The device was designed for medical use.', accept: ['The device that was designed for medical use was expensive.', 'The device which was designed for medical use was expensive.', 'The device, which was designed for medical use, was expensive.', 'The device designed for medical use was expensive.', 'The device that was expensive was designed for medical use.', 'The device which was expensive was designed for medical use.', 'The device, which was expensive, was designed for medical use.'], model: 'The device that/which was designed for medical use was expensive.' },
              { q: 'They interviewed the candidates. / The candidates were shortlisted for the position.', accept: ['They interviewed the candidates who were shortlisted for the position.', 'They interviewed the candidates that were shortlisted for the position.', 'They interviewed the candidates shortlisted for the position.'], model: 'They interviewed the candidates who/that were shortlisted for the position.' }
            ]
          },
          {
            type: 'exercise',
            kind: 'rewrite',
            id: 'u4-l-ex2',
            title: 'Exercise 2 — Reduce the Relative Clause',
            instructions: 'เขียนประโยคใหม่โดยใช้ reduced relative clause',
            items: [
              { q: 'The report that was submitted yesterday contains several errors.', accept: ['The report submitted yesterday contains several errors.'], model: 'The report submitted yesterday contains several errors.' },
              { q: 'The student who is sitting near the window is absent today.', accept: ['The student sitting near the window is absent today.'], model: 'The student sitting near the window is absent today.' },
              { q: 'The lecturer who was invited to speak at the conference specializes in discourse analysis.', accept: ['The lecturer invited to speak at the conference specializes in discourse analysis.'], model: 'The lecturer invited to speak at the conference specializes in discourse analysis.' },
              { q: 'The policy which was introduced in 2020 remains controversial.', accept: ['The policy introduced in 2020 remains controversial.'], model: 'The policy introduced in 2020 remains controversial.' },
              { q: 'She adopted a dog that was rescued from a local shelter.', accept: ['She adopted a dog rescued from a local shelter.'], model: 'She adopted a dog rescued from a local shelter.' }
            ]
          }
        ],

        /* ---------------- WRITING ---------------- */
        writing: [
          {
            type: 'heading',
            eyebrow: 'Writing',
            title: 'Writing Errors',
            subtitle: 'ข้อผิดพลาดระดับประโยคที่พบบ่อย: comma splice, run-on sentence และ sentence fragment'
          },
          {
            type: 'errorCards',
            cards: [
              {
                name: 'Comma Splice',
                what: 'เชื่อม independent clause สองประโยคด้วย comma อย่างเดียว ไม่มี conjunction (for, and, nor, but, or, yet, so) — comma อ่อนเกินไปที่จะเชื่อมประโยคสมบูรณ์',
                wrong: ['The coral reef supports thousands of species, it is one of the most diverse ecosystems on Earth.', 'Wolves hunt in packs, they rely on cooperation to survive.', 'Birds migrate long distances, the journey requires enormous energy.'],
                fixes: ['เติม coordinating conjunction: …species, <b>and</b> it is one of…', 'ใช้ semicolon: Wolves hunt in packs<b>;</b> they rely on cooperation to survive.', 'แยกเป็นสองประโยค: Birds migrate long distances<b>.</b> The journey requires enormous energy.']
              },
              {
                name: 'Run-on Sentence',
                what: 'independent clause ตั้งแต่สองประโยคต่อกันโดย <b>ไม่มีเครื่องหมายหรือคำเชื่อมเลย</b> ผู้อ่านไม่รู้ว่าความคิดหนึ่งจบตรงไหน',
                wrong: ['Elephants have strong social bonds they mourn their dead.', 'Rainforests regulate the global climate they absorb large amounts of carbon dioxide.', 'Predators control prey populations this maintains balance in ecosystems.'],
                fixes: ['เติมเครื่องหมาย: Elephants have strong social bonds<b>.</b> They mourn their dead.', 'เติมคำเชื่อม: …the global climate <b>because</b> they absorb…', 'ใช้ semicolon: Predators control prey populations<b>;</b> this maintains balance…']
              },
              {
                name: 'Sentence Fragment',
                what: 'ประโยคไม่สมบูรณ์ — ขาดประธาน ขาดกริยา หรือความคิดไม่ครบ มักเกิดเมื่อเอา dependent clause หรือ phrase มาใส่จุดเหมือนเป็นประโยค',
                wrong: ['Because penguins cannot fly. (dependent clause, ไม่มี main clause)', 'Living in the Arctic with thick fur and layers of fat. (participial phrase, ไม่มีประธาน/กริยาหลัก)', 'Which helps plants survive drought conditions. (relative clause, ความคิดไม่ครบ)'],
                fixes: ['Because penguins cannot fly, <b>they are excellent swimmers.</b>', '<b>Polar bears survive by</b> living in the Arctic with thick fur and layers of fat.', '<b>Many floras have deep roots</b> which help plants survive drought conditions.']
              }
            ]
          },
          {
            type: 'exercise',
            kind: 'splice',
            id: 'u4-w-a1',
            title: 'Writing Activity 1 — Fix the Comma Splice',
            instructions: 'แก้ comma splice โดยใช้ จุด (.) คำเชื่อม (and, but, so…) หรือ semicolon (;)',
            items: [
              { q: 'She waited for his reply, no message arrived.', a: 'She waited for his reply', b: 'no message arrived', model: 'She waited for his reply, but no message arrived. / She waited for his reply; no message arrived.' },
              { q: 'He finished his work early, he decided to go for a walk.', a: 'He finished his work early', b: 'he decided to go for a walk', model: 'He finished his work early, so he decided to go for a walk.' },
              { q: 'The house felt empty, everyone had gone out.', a: 'The house felt empty', b: 'everyone had gone out', model: 'The house felt empty because everyone had gone out. / The house felt empty; everyone had gone out.' },
              { q: 'He practiced his speech all evening, his confidence slowly faded.', a: 'He practiced his speech all evening', b: 'his confidence slowly faded', model: 'He practiced his speech all evening, but his confidence slowly faded.' }
            ]
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u4-w-a2',
            title: 'Writing Activity 2 — Choose the Best Revision',
            instructions: 'เลือกการแก้ไขที่ดีที่สุด',
            items: [
              { q: '1. She finished her homework late, she felt exhausted.', options: ['She finished her homework late she felt exhausted.', 'She finished her homework late, and feeling exhausted.', 'She finished her homework late, she exhausted.', 'She finished her homework late, and she felt exhausted.'], answer: 3, explain: 'comma + and + ประโยคสมบูรณ์ (A เป็น run-on, B/C ผิดไวยากรณ์)' },
              { q: '2. He checked his phone repeatedly, no new messages appeared.', options: ['He checked his phone repeatedly; no new messages appeared.', 'He checked his phone repeatedly, appearing no new messages.', 'He checked his phone repeatedly no new messages appeared.', 'He checked his phone repeatedly, no messages.'], answer: 0, explain: 'semicolon เชื่อม independent clauses สองประโยคได้ถูกต้อง' },
              { q: '3. The meeting ended early, everyone stayed silent.', options: ['The meeting ended early everyone stayed silent.', 'The meeting ended early, staying silent.', 'The meeting ended early, but everyone stayed silent.', 'The meeting ended early, everyone.'], answer: 2, explain: 'comma + but + ประโยคสมบูรณ์' },
              { q: '4. She smiled at her friends, she felt nervous inside.', options: ['She smiled at her friends she felt nervous inside.', 'She smiled at her friends; she felt nervous inside.', 'She smiled at her friends, but feeling nervous inside.', 'She smiled at her friends, she nervous inside.'], answer: 1, explain: 'semicolon คือการแก้ที่ถูกต้องเพียงข้อเดียว' },
              { q: '5. He woke up before sunrise, the house was still asleep.', options: ['He woke up before sunrise the house was still asleep.', 'He woke up before sunrise, sleeping house still.', 'He woke up before sunrise, and the house was still asleep.', 'He woke up before sunrise, the house.'], answer: 2, explain: 'comma + and + ประโยคสมบูรณ์' }
            ]
          },
          {
            type: 'exercise',
            kind: 'rocheck',
            id: 'u4-w-a3',
            title: 'Writing Activity 3 — Run-on or Correct?',
            instructions: 'ตัดสินว่าเป็น Run-on (RO) หรือประโยคถูกต้อง (C) ถ้าเป็น RO ให้เขียนแก้ใหม่',
            items: [
              { q: 'I wanted to join the art club I didn’t know anyone there yet.', answer: 'RO', a: 'I wanted to join the art club', b: 'I didn’t know anyone there yet', model: 'I wanted to join the art club, but I didn’t know anyone there yet.' },
              { q: 'She carefully prepared her speech she hoped everyone would understand her ideas.', answer: 'RO', a: 'She carefully prepared her speech', b: 'she hoped everyone would understand her ideas', model: 'She carefully prepared her speech because she hoped everyone would understand her ideas.' },
              { q: 'After school, I went to the library and studied for two hours.', answer: 'C', explain: 'ประธานเดียว (I) กริยาสองตัวเชื่อมด้วย and — ถูกต้อง' },
              { q: 'He stayed up late watching the series he had an important meeting the next morning.', answer: 'RO', a: 'He stayed up late watching the series', b: 'he had an important meeting the next morning', model: 'He stayed up late watching the series, although he had an important meeting the next morning.' },
              { q: 'She felt anxious before the interview, but she reminded herself to stay calm.', answer: 'C', explain: 'comma + but เชื่อมสองประโยคอย่างถูกต้อง' },
              { q: 'The sun was shining brightly we decided to have a picnic in the park.', answer: 'RO', a: 'The sun was shining brightly', b: 'we decided to have a picnic in the park', model: 'The sun was shining brightly, so we decided to have a picnic in the park.' },
              { q: 'She received an email from her friend she immediately replied with excitement.', answer: 'RO', a: 'She received an email from her friend', b: 'she immediately replied with excitement', model: 'She received an email from her friend, and she immediately replied with excitement.' },
              { q: 'I finished reading the novel; it was full of surprising twists and interesting characters.', answer: 'C', explain: 'semicolon เชื่อมสองประโยคอย่างถูกต้อง' },
              { q: 'They planned to go hiking, but the rain forced them to stay home instead.', answer: 'C', explain: 'comma + but — ถูกต้อง' },
              { q: 'We visited the science museum yesterday we watched a fascinating demonstration about space.', answer: 'RO', a: 'We visited the science museum yesterday', b: 'we watched a fascinating demonstration about space', model: 'We visited the science museum yesterday, and we watched a fascinating demonstration about space.' }
            ]
          },
          {
            type: 'exercise',
            kind: 'open',
            id: 'u4-w-a4',
            title: 'Writing Activity 4 — Complete the Fragments',
            instructions: 'เขียน fragment ให้เป็นประโยคสมบูรณ์ด้วยจินตนาการของคุณ (เติม main clause / เชื่อมกับอีกประโยค / เขียนใหม่ทั้งประโยค)',
            items: [
              { q: 'Because I had never travelled alone before.', fragment: 'Because I had never travelled alone before', model: 'Because I had never travelled alone before, I felt nervous at the airport.' },
              { q: 'After the storm finally passed.', fragment: 'After the storm finally passed', model: 'After the storm finally passed, we went outside to check the damage.' },
              { q: 'Although I tried to stay calm.', fragment: 'Although I tried to stay calm', model: 'Although I tried to stay calm, my hands were shaking.' },
              { q: 'Standing alone at the finish line.', fragment: 'Standing alone at the finish line', model: 'Standing alone at the finish line, I waited for my friends to arrive.' },
              { q: 'Remembering how far I had come.', fragment: 'Remembering how far I had come', model: 'Remembering how far I had come, I smiled and kept running.' },
              { q: 'When mistakes became opportunities instead of setbacks.', fragment: 'When mistakes became opportunities instead of setbacks', model: 'My attitude changed when mistakes became opportunities instead of setbacks.' },
              { q: 'Which taught me the value of patience.', fragment: 'Which taught me the value of patience', model: 'I spent a year learning the piano, which taught me the value of patience.' },
              { q: 'While everyone else seemed confident.', fragment: 'While everyone else seemed confident', model: 'While everyone else seemed confident, I was terrified of making a mistake.' },
              { q: 'The moment of relief after weeks of stress.', fragment: 'The moment of relief after weeks of stress', model: 'I will never forget the moment of relief after weeks of stress.' },
              { q: 'Feeling nervous but strangely excited at the same time.', fragment: 'Feeling nervous but strangely excited at the same time', model: 'Feeling nervous but strangely excited at the same time, I stepped onto the stage.' }
            ]
          },
          {
            type: 'note',
            title: 'Coherence in Narrative Paragraph Writing',
            html: `
              <p><i>“Coherence is a connection between thoughts, opinions, and ideas in the paragraph.”</i> ย่อหน้าที่ coherent มีประโยคเรียงอย่างมีเหตุผลและมี transition ชัดเจน ทำให้ผู้อ่านตามลำดับเหตุการณ์ เข้าใจอารมณ์ และเห็นพัฒนาการของเรื่องตั้งแต่ต้นจนจบ</p>
              <div class="coh-grid">
                <div><b>1. Clear chronological order</b><p>✘ I felt relieved. I ran to the bus stop. I realized my bag was missing.<br>✔ I realized my bag was missing, so I ran to the bus stop. Later, I felt relieved when I found it.</p></div>
                <div><b>2.1 Consistent tense</b><p>✘ I <u>panic</u> when I noticed my wallet was gone.<br>✔ I <b>panicked</b> when I noticed my wallet was gone.<br><span class="muted">เปลี่ยน tense ได้เมื่อสะท้อนปัจจุบันหรือเป็นความจริงทั่วไป: Since then, I always double-check my belongings.</span></p></div>
                <div><b>2.2 Consistent point of view</b><p>✘ I ran to the station, and <u>you start</u> to feel helpless.<br>✔ I ran to the station, and <b>I started</b> to feel helpless.</p></div>
                <div><b>3. Smooth sentence structure</b><p>Conjunctions: I was tired, <b>but</b> I kept working.<br>Subordinate clauses: <b>When</b> the lights went out, everyone screamed.<br>-ing phrases: She sat alone, <b>waiting</b> nervously.<br>Combine description: The <b>long, dark</b> hallway was silent.<br>Cause & effect: He missed the bus <b>because</b> he woke up late.</p></div>
              </div>`
          },
          {
            type: 'exercise',
            kind: 'rewrite',
            id: 'u4-w-a5',
            title: 'Writing Activity 5 — Fix Tense / Point-of-View Errors',
            instructions: 'แต่ละประโยคมีข้อผิดพลาดเรื่อง tense หรือ point of view เขียนใหม่ให้ถูกต้อง (ใช้ past tense)',
            items: [
              { q: 'I feel relieved when I found my keys under the chair.', accept: ['I felt relieved when I found my keys under the chair.'], model: 'I felt relieved when I found my keys under the chair.' },
              { q: 'She smiles nervously and dropped her phone.', accept: ['She smiled nervously and dropped her phone.'], model: 'She smiled nervously and dropped her phone.' },
              { q: 'I waited quietly, and you start feeling frustrated.', accept: ['I waited quietly, and I started feeling frustrated.', 'I waited quietly and started feeling frustrated.', 'I waited quietly, and I started to feel frustrated.', 'I waited quietly and started to feel frustrated.', 'I waited quietly, and I began feeling frustrated.', 'I waited quietly, and I began to feel frustrated.', 'I waited quietly and began to feel frustrated.', 'I waited quietly and began feeling frustrated.'], model: 'I waited quietly, and I started feeling frustrated.' },
              { q: 'They are excited when the announcement was made.', accept: ['They were excited when the announcement was made.'], model: 'They were excited when the announcement was made.' },
              { q: 'He worries about the situation and felt uncertain.', accept: ['He worried about the situation and felt uncertain.'], model: 'He worried about the situation and felt uncertain.' }
            ]
          },
          {
            type: 'exercise',
            kind: 'paragraphFix',
            id: 'u4-w-a6',
            title: 'Writing Activity 6 — Make the Paragraph Consistent',
            instructions: 'ย่อหน้านี้เปลี่ยน tense และ point of view ไปมา เขียนใหม่ให้เป็น past tense และมุมมอง “I” ตลอด',
            original: 'I walk along a dark street and hear footsteps behind me. My hands are shaking, and you start looking over your shoulder. I quicken my pace and turn into a narrow alley. A stranger follows closely and speaks loudly. In the end, I feel relieved when the noise faded away.',
            checks: [
              { bad: '\\bwalk\\b', msg: '“walk” → walked' },
              { bad: '\\bhear\\b', msg: '“hear” → heard' },
              { bad: '\\bare shaking\\b', msg: '“are shaking” → were shaking' },
              { bad: '\\byou\\b|\\byour\\b', msg: 'เปลี่ยน “you/your” เป็น “I/my” ให้ point of view คงที่' },
              { bad: '\\bstart\\b', msg: '“start” → started' },
              { bad: '\\bquicken\\b', msg: '“quicken” → quickened' },
              { bad: '\\bturn\\b', msg: '“turn” → turned' },
              { bad: '\\bfollows\\b', msg: '“follows” → followed' },
              { bad: '\\bspeaks\\b', msg: '“speaks” → spoke' },
              { bad: '\\bfeel\\b', msg: '“feel” → felt' }
            ],
            requires: ['walked', 'heard', 'were shaking', 'quickened', 'turned', 'followed', 'spoke', 'felt'],
            model: 'I walked along a dark street and heard footsteps behind me. My hands were shaking, and I started looking over my shoulder. I quickened my pace and turned into a narrow alley. A stranger followed closely and spoke loudly. In the end, I felt relieved when the noise faded away.'
          },
          {
            type: 'exercise',
            kind: 'mcq',
            id: 'u4-w-a7',
            title: 'Writing Activity 7 — Which Sounds Smoothest?',
            instructions: 'เลือกประโยคที่ลื่นไหลและเป็นธรรมชาติที่สุด',
            items: [
              { q: '1.', options: ['I entered the room. I felt nervous. People stared.', 'I entered the room, feeling nervous as people stared.', 'I entered the room feeling nervous people stared.'], answer: 1, explain: 'ใช้ -ing phrase (feeling) + as clause รวมความคิด (C เป็น run-on)' },
              { q: '2.', options: ['The rain stopped. We continued hiking.', 'Because the rain stopped we continued hiking.', 'When the rain stopped, we continued hiking.'], answer: 2, explain: 'subordinate clause แสดงเวลา และมี comma หลัง clause ที่ขึ้นต้นประโยค' },
              { q: '3.', options: ['She smiled. She received praise. She felt proud.', 'She smiled and she received praise and she felt proud.', 'She smiled after receiving praise, feeling proud of herself.'], answer: 2, explain: 'ไม่ซ้ำประธาน ใช้ after + -ing และ -ing phrase แสดงความรู้สึก' }
            ]
          },
          {
            type: 'exercise',
            kind: 'open',
            id: 'u4-w-a8',
            title: 'Writing Activity 8 — Combine Choppy Sentences',
            instructions: 'รวมแต่ละชุดให้เป็นประโยคเดียวที่ลื่นไหล ใช้ conjunctions, time words หรือ -ing phrases',
            items: [
              { q: 'I waited for the results. My heart beat fast. I felt apprehensive.', oneSentence: true, model: 'While I was waiting for the results, my heart beat fast and I felt apprehensive.' },
              { q: 'The child reached the stage. The audience grew quiet. Everyone watched closely.', oneSentence: true, model: 'When the child reached the stage, the audience grew quiet, and everyone watched closely.' },
              { q: 'She missed the call. She checked her phone later. She felt disappointed.', oneSentence: true, model: 'When she checked her phone later, she realized she had missed the call and felt disappointed.' },
              { q: 'The sun rose. The streets filled with people. The city came alive.', oneSentence: true, model: 'As the sun rose, the streets filled with people, and the city came alive.' },
              { q: 'He practiced every day. The performance arrived. He felt confident.', oneSentence: true, model: 'Having practiced every day, he felt confident when the performance arrived.' }
            ]
          },
          {
            type: 'composer',
            id: 'u4-w-studio',
            title: 'Writing Studio — Error-Free Narrative',
            instructions: 'เขียนย่อหน้าเล่าเรื่อง 180–220 คำ แล้วให้ระบบช่วยหา comma splice ที่อาจเกิด การเปลี่ยน tense และ point of view (“you”)',
            min: 180,
            max: 220,
            topics: [
              'Write about a time you saw wildlife up close.',
              'Write about a day at the beach or in a forest that you will never forget.',
              'Write about the most frightening experience you have ever had.',
              'Write about an important lesson that you learned.',
              'Write about the most embarrassing experience you have ever had.'
            ],
            checklist: ['ไม่มี comma splice / run-on', 'ไม่มี sentence fragment', 'ใช้ past tense สม่ำเสมอ', 'point of view คงที่ (ไม่มี “you” แทรก)', 'เรียงตามเวลา + มี transition', 'รวมประโยคสั้น ๆ ให้ลื่นไหล']
          }
        ],

        /* ---------------- COMMUNICATION ---------------- */
        communication: [
          {
            type: 'heading',
            eyebrow: 'Communication Activity 1 [5%]',
            title: 'Deep Sea Creatures Exhibit Bioluminescence',
            subtitle: 'ดูวิดีโอ “Deep Sea Creatures Exhibit Bioluminescence | Blue Planet | BBC Earth” (ลิงก์/QR ในหนังสือ หน้า 138)'
          },
          {
            type: 'exercise',
            kind: 'fill',
            id: 'u4-c-bio',
            title: 'Video Summary — No More Than ONE WORD',
            instructions: 'เติมบทสรุปด้วยคำเดียว',
            intro: '<i>Even in the deep, dark ocean, some creatures produce their own light, a phenomenon called (1) ___. Deep-sea (2) ___, for example, have lures that glow thanks to (3) ___ living inside them. These lures attract prey toward the anglerfish’s sharp teeth. Anglerfish have multiple lures, and they use them much like (4) ___ use imitation flies, enticing prey such as squid that finds the light (5) ___. This light allows predators to hunt effectively in complete darkness…</i>',
            items: [
              { q: '(1) a phenomenon called ___', accept: ['bioluminescence'], explain: 'การเรืองแสงทางชีวภาพ' },
              { q: '(2) Deep-sea ___, for example, have lures that glow', accept: ['anglerfish', 'angler-fish', 'anglerfishes'], explain: 'ประโยคถัดมาพูดถึง “the anglerfish’s sharp teeth”' },
              { q: '(3) glow thanks to ___ living inside them', accept: ['bacteria'], explain: 'แบคทีเรียเรืองแสงที่อาศัยอยู่ในเหยื่อล่อ' },
              { q: '(4) much like ___ use imitation flies', accept: ['fishermen', 'fishers', 'anglers', 'fishermans'], explain: 'คนตกปลาใช้เหยื่อปลอม (fly fishing)' },
              { q: '(5) prey such as squid that finds the light ___', accept: ['irresistible', 'attractive', 'appealing'], explain: 'แสงดึงดูดจนเหยื่อห้ามใจไม่ได้' }
            ]
          },
          {
            type: 'planner',
            id: 'u4-c-mission',
            title: 'Deep-Sea Exploration Mission (5%)',
            intro: 'ทำงานกลุ่ม 3–4 คน ค้นข้อมูลระบบนิเวศทะเลลึกที่น่าสนใจ แล้วออกแบบภารกิจสำรวจ จากนั้นนำเสนอ 2–3 นาที',
            fields: [
              { label: '1. Purpose of the Mission', hint: 'What do you want to discover or study? (e.g., chemosynthesis, new species, climate effects)' },
              { label: '2. Tools and Equipment', hint: 'What equipment will you bring (submersible, ROV, cameras, sensors)? Why do you need each tool?' },
              { label: '3. Organisms to Investigate', hint: 'Which animals or microbes will you focus on? Why are they important?' },
              { label: '4. Risks and Challenges', hint: 'What difficulties will your team face (pressure, darkness, equipment failure)? How will you deal with them?' },
              { label: '5. Expected Scientific Contributions', hint: 'What new knowledge could your mission provide? How might your findings help science?' }
            ]
          },
          {
            type: 'passage',
            id: 'u4-overpass',
            title: 'Communication Activity 2 — Wildlife Overpass in Alberta',
            source: 'Adapted from dialogdesign.ca',
            paragraphs: [
              'This is the first wildlife overpass constructed in Alberta since 2010. The arches are covered with soil and vegetation which ties into the surrounding topography and landscape, a crucial design element that encourages wildlife usage. The project also includes 12 kilometres of exclusion fencing along the highway to funnel wildlife to the overpass and a series of “jump outs” to allow animals who enter the right-of-way to exit safely.',
              'According to the Ontario Nature Centre for Social Innovation, it is estimated that a wildlife-vehicle collision occurs every 38 minutes in Canada, with associated costs reaching up to CAD $200 million annually. Wildlife-vehicle collisions not only lead to fatalities and serious injuries but also endanger certain species, putting them at risk of extinction and threatening Canada’s biodiversity.',
              'As a solution, wildlife overpasses have been carefully constructed to blend with the surrounding environment. They are often covered in native vegetation to mimic animals’ natural habitats and strategically designed to encourage animal crossings while enhancing road safety.'
            ]
          },
          {
            type: 'discussion',
            title: 'Discuss and agree',
            questions: ['What is the main problem in this text?', 'How do wildlife overpasses help?', 'Which detail is the most surprising or impressive to you? Why?', 'Do you think this project is worth the cost? Why or why not?']
          },
          {
            type: 'planner',
            id: 'u4-c-conserve',
            title: 'Conservation Project (5%)',
            intro: 'กลุ่ม 3–4 คน ออกแบบโครงการอนุรักษ์หรือสร้างความตระหนักสำหรับระบบนิเวศบนบกในประเทศไทย (เช่น เขาสก แก่งกระจาน ป่าชายเลน ทุ่งหญ้า ป่าดิบเขา ป่าดิบแล้ง) แล้วนำเสนอ 2–3 นาที',
            fields: [
              { label: '1. Ecosystem', hint: 'Which terrestrial ecosystem in Thailand did you choose?' },
              { label: '2. Key issues', hint: 'What threats does it face (deforestation, tourism, fires, roads, wildlife collisions, poaching, monocrop farming)? Which species are affected?' },
              { label: '3. Your mini project', hint: 'What problem does it address? Why is it important? Who will it help? How does it work?' },
              { label: '4. Expected benefits', hint: 'Why would it help protect biodiversity?' }
            ]
          }
        ]
      },

      glossary: [
        { word: 'astonishing', pos: 'adjective', th: 'น่าทึ่ง, น่าประหลาดใจมาก', en: 'very surprising', example: 'Beyond revealing astonishing biodiversity, the findings have important implications for Earth’s global systems.' },
        { word: 'deforestation', pos: 'noun', th: 'การตัดไม้ทำลายป่า', en: 'the cutting down of trees in a large area, or the destruction of forests by people', example: 'Deforestation and fires remain dangerously high, and protected areas and Indigenous lands face increasing threats.' },
        { word: 'habitat', pos: 'noun', th: 'ถิ่นที่อยู่อาศัยตามธรรมชาติ', en: 'the natural environment in which an animal or plant usually lives', example: 'To help them survive, their habitats must stay connected and protected.' },
        { word: 'implication', pos: 'noun', th: 'ผลกระทบที่จะตามมา, นัยสำคัญ', en: 'the effect that an action or decision will have on something else in the future', example: 'The findings have important implications for Earth’s global systems.' },
        { word: 'indigenous', pos: 'adjective', th: 'พื้นเมือง, ดั้งเดิม', en: 'used to refer to the people who originally lived in a place, rather than people who moved there from somewhere else', example: '47 million people live in the Amazon, including around 2.2 million indigenous people, speaking around 300 different languages.' },
        { word: 'ingenuity', pos: 'noun', th: 'ความเฉลียวฉลาด, ความคิดสร้างสรรค์', en: 'the skill of thinking, performing, or using things in new ways', example: 'The deep-sea trenches stand as evidence of the resilience and ingenuity of life on Earth.' },
        { word: 'intriguing', pos: 'adjective', th: 'น่าสนใจ, ชวนให้อยากรู้', en: 'very interesting because of being unusual or mysterious', example: 'The discovery also raises intriguing possibilities for studying life in extreme conditions.' },
        { word: 'overlap', pos: 'verb', th: 'ทับซ้อน, คาบเกี่ยว', en: 'to have some parts that happen at the same time or are the same', example: 'A recent study identified regions where high jaguar populations overlap with areas rich in migratory freshwater species.' },
        { word: 'productivity', pos: 'noun', th: 'ความสามารถในการผลิต, ผลิตภาพ', en: 'the ability to produce large amounts of something', example: 'Observations revealed tubeworms reaching up to 30 centimetres in length, highlighting the productivity and complexity of these remote habitats.' },
        { word: 'resilience', pos: 'noun', th: 'ความยืดหยุ่น, ความสามารถในการฟื้นตัว', en: 'the quality of being able to return quickly to a previous good condition after problems', example: 'The deep-sea trenches stand as evidence of the resilience and ingenuity of life on Earth.' },
        { word: 'scarce', pos: 'adjective', th: 'หายาก, ขาดแคลน', en: 'not easy to find or get', example: 'The discovery could inform research on other planets or moons where sunlight is scarce but chemical energy might support ecosystems.' },
        { word: 'stabilize', alts: ['stabilise'], pos: 'verb', th: 'ทำให้มีเสถียรภาพ, ทำให้คงที่', en: 'to become fixed or stop changing', example: 'Not just for food, water, wood and medicines, but also to help stabilize the climate.' },
        { word: 'striking', pos: 'adjective', th: 'โดดเด่น, สะดุดตา', en: 'very unusual or easily noticed, and therefore attracting a lot of attention', example: 'These communities are striking for their size, density, and diversity.' },
        { word: 'submersible', pos: 'noun', th: 'ยานดำน้ำ', en: 'a type of ship that can travel underwater', example: 'Using a manned submersible, researchers observed large colonies of tubeworms, clams, mollusks, crustaceans, sea cucumbers, and other invertebrates.' },
        { word: 'sustain', pos: 'verb', th: 'ค้ำจุน, ทำให้ดำรงอยู่ต่อไป', en: 'to cause or allow something to continue for a period of time', example: 'Microbes convert chemicals into energy, which tubeworms and mollusks then use to grow and sustain themselves.' },
        { word: 'threat', pos: 'noun', th: 'ภัยคุกคาม', en: 'the possibility that something unwanted will happen, or a person or thing that is likely to cause something unwanted to happen', example: 'This precious ecosystem is under increasing threat from huge-scale farming and ranching, infrastructure and urban development, unsustainable logging, mining and climate change.' },
        { word: 'uncover', pos: 'verb', th: 'เปิดเผย, ค้นพบ (สิ่งที่ซ่อนอยู่)', en: 'to discover something secret or hidden', example: 'Scientists have uncovered remarkable ecosystems in the extreme depths of the ocean.' },
        { word: 'under siege', pos: 'prepositional phrase', th: 'ถูกรุมเร้า, ถูกคุกคามอย่างหนักต่อเนื่อง', en: 'experiencing serious and continuous attacks or pressure', example: 'The Amazon is under siege like never before.' },
        { word: 'uninhabitable', pos: 'adjective', th: 'ไม่เหมาะแก่การอยู่อาศัย', en: 'not suitable to live in', example: 'Life has found ways to adapt to environments once considered uninhabitable.' }
      ]
    }
  ]
};
