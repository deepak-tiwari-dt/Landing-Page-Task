import styles from "./OurTeam.module.css"; // Import the CSS module

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Meredith Allen",
      role: "CEO",
      img: "../../public/CEO.png",
    },
    {
      name: "Thomas Woodward",
      role: "COO",
      img: "../../public/COO.png",
    },
    {
      name: "Wade Barton",
      role: "Business Analyst",
      img: "../../public/Business-Analyst.png",
    },
    {
      name: "Yahir Marquez",
      role: "Marketing Executive",
      img: "../../public/Marketing-Executive.png",
    },
  ];

  return (
    <div className={styles.ourTeamContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Our Team</h1>
        <p className={styles.description}>
          We believe that great ideas come to life through collaboration and
          innovation. Our team is a diverse group of passionate professionals,
          each bringing unique skills and experiences to the table. From
          creative designers and strategic thinkers to technical experts and
          problem-solvers, we are united by a shared vision of delivering
          excellence in everything we do.
        </p>
        <p className={styles.description}>
          Our mission is to empower businesses and individuals by creating
          innovative, sustainable, and user-friendly designs. With a culture
          that values integrity, growth, and teamwork, we are committed to
          creating meaningful solutions that make a difference. Whether it's
          crafting cutting-edge designs, developing user-centered interfaces, or
          building sustainable solutions, our team thrives on turning challenges
          into opportunities.
        </p>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div className={styles.teamCard} key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sidebarLeft}>Personal Details</div>
      <div className={styles.sidebarRight}>Contact Us</div>
    </div>
  );
};

export default OurTeam;
