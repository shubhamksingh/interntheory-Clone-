
const slide = [
	{
		name: "Harshil Bhadra",
		image: "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
		position: "Intern at Porsche",
		content: `
        "If you are more than satisfied with
        particular product/firm who gives you more 
        than you expect then there’s no need to
        find a substitute. Its similar with Intern
        Theory, the best team who makes continuous
        efforts and always ready to help! Thanks
        for giving me the best start."
        `,
	},
	{
		name: "Amani Nagda",
		image: "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
		position: "Intern at Viacom18",
		content: `
        "I was on a look out for an internship to
        spend my summer productively and I
        stumbled upon Inter Theory. Their team was
        very kind and kept me updated. I applied
        for Viacom18 and got through. I thank
        Intern Theory team for giving me this
        opportunity."
        `,
	},
	{
		name: "Siddharth Viyyapu",
		image: "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
		position: "Intern at Gooseberry Homes",
		content: `
        "I created my profile because I had before
        Intern Theory, not come across a
        consultancy that would execute the
        responsibility of getting a result for
        your application irrespective of being
        failure or success the way they did.
        They've set the bars really high! Kudos
        team!"
        `,
	},
	{
		name: "Sshikha Bodwaani",
		image: "https://assets.interntheory.com/img/testimonial-image/in1.jpg",
		position: "Sr. Exec. HR at BookMyShow",
		content: `
        "We have been using InternTheory for over a year now and are very
        happy with the quality of applications that we receive. Their team
        has been very helpful in screening applications for the various
        internship requirements we had. It has been a delight working with
        them."
        `,
	},
];

let slide_img = document.querySelector(".vikas_sec_1 > img");
let slide_content = document.querySelector(".vikas_sec2 > p");
let slide_name = document.querySelector(".vikas_sec_1 > h5");
let slide_position = document.querySelector(".vikas_sec_1 > span");
let slide_img_2 = document.querySelector(".vikas_sec_1_2 > img");
let slide_content_2 = document.querySelector(".vikas_sec2_2 > p");
let slide_name_2 = document.querySelector(".vikas_sec_1_2 > h5");
let slide_position_2 = document.querySelector(".vikas_sec_1_2 > span");
let sld = 0;
var sld_2;
setInterval(slide_show, 1500);
function slide_show() {
	if (sld >= 4) {
		sld = 0;
	}
	if (sld < 0) {
		sld = 3;
	}
	if (sld == 0) {
		sld_2 = 1;
	}
	if (sld == 1) {
		sld_2 = 2;
	}
	if (sld == 2) {
		sld_2 = 3;
	}
	if (sld == 3) {
		sld_2 = 0;
	}
	slide_img.src = slide[sld].image;
	slide_name.innerHTML = `${slide[sld].name}`;
	slide_position.innerHTML = `${slide[sld].position}`;
	slide_content.innerHTML = `${slide[sld].content}`;
	slide_img_2.src = slide[sld_2].image;
	slide_name_2.innerHTML = `${slide[sld_2].name}`;
	slide_position_2.innerHTML = `${slide[sld_2].position}`;
	sld++;
	sld_2++;
}
function left() {
	sld-=2;
	slide_show();
}
function right() {
	sld += 2;
	slide_show();
}
