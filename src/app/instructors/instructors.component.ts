import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  public data: any[] = [
    {
      "title": "Sensei Carl Young",
      "tags": ["Owner"],
      "options": {
        "content": `<p>Sensei Carl Young is the founder of Beyond the Belt Martial Arts Center, and <strong>his nearly two decades of martial arts experience</strong>, passion for teaching, and commitment to his 
        students have combined to make an exceptional martial arts academy.<br><br>Well versed in a variety of skills including <strong>Muay Thai kickboxing, Brazilian Jiu-Jitsu, catch wrestling, and Kempo karate</strong>, 
        Carl is an exceptional martial artist. Yet anyone who knows Carl recognizes his true passion, which is in always looking for <em>innovative ways to teach young people discipline, character, and wisdom through martial 
        arts</em>. <br><br>He is committed to personal ongoing training and the evolution of martial arts. This includes personally training with MMA fighters and improving his own skills in a variety of areas. Yet his 
        greatest ability is in making modern martial arts accessible to kids, teenagers, and adults alike.<br><br>Among other accolades, he was the <strong>2006 and 2009 EFC Instructor of the Year</strong>, 
        a prestigious award given only to instructors who have proven excellence in martial arts technique, and who have demonstrated their outstanding ability in instruction.</p>
        <h3>Qualifications &amp; Strengths</h3><ul><li>25+ Years Martial Arts Experience</li><li>10+ Years Teaching Experience</li><li>Muay Thai Kickboxing, Brazillian Jiu Jitsu, Catch Wrestling, Traditional Karate<br></li></ul><h3>Hobbies</h3><ul><li>Marksmanship</li><li>Hiking and Camping</li><li>Teaching and working in the Community</li><li>Spending time with his wife, Michele and daughter, Ryan</li></ul>`,
        "blurb": "Owner, Founder",
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/5c8a72e4c18e6.png"
      },
    },
    {
      "title": "Michele Young",
      "tags": ["Owner"],
      "options": {
        "content": `<p>Michele brings her many years of administrative and management skills to the team at Beyond the Belt. As a mother of a student, Michele understands how the teachings of martial arts can positively impact kids by enhancing their life-skills and placing emphasis on their values and attitudes. <br><br>She provides support for the entire BTB staff through her enthusiasm, professional demeanor and dedication. Michele practices a healthy lifestyle through the Paleo diet, her enjoyment of yoga, hiking and fitness.<br></p>`,
        "blurb": "Director",
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/58d5457072e9f.png"
      },
    },
    {
      "title": "Andrea Gautreau",
      "tags": ["Director"],
      "options": {
        "content": `<p class="p1">Andrea is one of our Program Directors for our Laconia location. She brings a great energy and enthusiasm to our team and is always ready to help. In her free time, she loves baking, boating, and watching her daughter Maddie cheer. What Andrea loves most about Beyond the Belt is watching the students move up in rank and grow as warriors. She also loves how Beyond the Belt is one big family!</p>`,
        "blurb": "Program Director",
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/6/563397f1eb2dd.jpg"
      },
    },
    {
      "title": "Sensei Bethany Clifton",
      "tags": ["HeadInstructor"],
      "options": {
        "content": `<p class="p1">Sensei Beth is one of the head instructors for our Laconia location. She brings a fiery energy to the dojo, be it teaching classes, special events, meeting with parents, or working one on one with a student. In her free time, Sensei Beth loves fitness, playing football, the arts, and practicing nunchucks. What Sensei Beth loves most about Beyond the Belt is the way it grows kids into warriors and leaders. She is glad to be a part of something that encourages kids to do more, be more, and change the world for the better.</p>`,
        "blurb": "Head Instructor",
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/5c8a73715a918.png"
      },
    },
    {
      "title": "Ethan Merrill",
      "tags": ["Staff"],
      "options": {
        "content": `<p>Coach Ethan is an upbeat and always energetic instructor at our Laconia location! He is always talking to students in the lobby and pushing them to be their best in the dojo. Coach Ethan is a well versed martial artist who loves to train nunchucks, bo staff, is a longtime member of the BTB Demo Team, and a solid training partner in our Adult MMA program. Outside of BTB, he also has done many Spartan races and other obstacle course racing! He looks forward to seeing you in his classes!</p>`,
        "blurb": "Instructor",
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/5c8a74fbd73e1.png"
      },
    },
    {
      "title": "Eric Oswald",
      "tags": ["Staff"],
      "options": {
        "content": `<p>Coach Eric is an instructor at our Laconia location. He helps instructor our Beginner/Advanced Teen classes, but he is always ready to jump in and lend a helping hand whenever a student needs assistance. He trains alongside his wife, Liz, and his daughter, Addy! He hopes to see you in his classes soon!</p>`,
        "blurb": "Instructor",
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/5c8a7588dd885.png"
      },
    },
    {
      "title": "Briah Welch",
      "tags": ["Staff"],
      "options": {
        "content": `<p><span class="s1">Coach Briah is one of our instructors for our Center Harbor location. She is always ready to train and brings a great positive energy that she shares with her students. She loves Center Harbor for it's tight knit family and can't wait to see you in her classes!</span></p>`,
        "blurb": "Instructor",
        "headerImageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Articles/5c8a7657d7e72.png"
      },
    }
  ];

  public get owners() {
    return this.tagFilter("Owner");
  }

  public get headInstructors() {
    return this.tagFilter("HeadInstructor");
  }

  public get instructors() {
    return this.tagFilter("Staff");
  }

  public get directors() {
    return this.tagFilter("Director");
  }

  public selected: any;

  constructor() { }

  ngOnInit() {
  }

  public tagFilter(tag) {
    return this.data.filter(o => {
      return o.tags.find(t => t === tag);
    });
  }

}
