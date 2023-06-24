class Monument {
    constructor(monumentName, type, shortInfo, dating, military_rank, military_division, origin, bibliography, img, place, text) {

        this.monumentName = monumentName;
        this.type = type;
        this.shortInfo = shortInfo;
        this.dating = dating;
        this.military_rank = military_rank;
        this.military_division = military_division;
        this.origin = origin;
        this.bibliography = bibliography;
        this.img = img;
        this.place = place;
        this.text= text;
    }
}

export { Monument }