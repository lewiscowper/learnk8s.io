import moment from 'moment-timezone'
import marked from 'marked'
import { cat } from 'shelljs'

const renderer = new marked.Renderer()

enum Language {
  ENGLISH = 'English',
  ITALIAN = 'Italian',
}

enum CourseName {
  BASIC = 'Deploying and scaling applications in Kubernetes',
  ADVANCED = 'Advanced Kubernetes training',
}

export enum CurrencyCode {
  USD = 'USD',
  GBP = 'GBP',
  EUR = 'EUR',
  SGD = 'SGD',
  CAD = 'CAD',
  SEK = 'SEK',
  AUD = 'AUD',
  CHF = 'CHF',
  HKD = 'HKD',
}

export interface Venue {
  address: string | null
  country: string | null
  countryCode: string | null
  city: string | null
  postcode: string | null
  name: string
}

interface Offer {
  price: number
  currency: CurrencyCode
  locale: string
}

enum CourseCode {
  BASIC = 'K8SBASIC',
  ADVANCED = 'K8SADVANCED',
}

export enum Timezone {
  LONDON = 'Europe/London',
  SAN_FRANCISCO = 'America/Los_Angeles',
  TORONTO = 'America/Toronto',
  SINGAPORE = 'Asia/Singapore',
  HONG_KONG = 'Asia/Hong_Kong',
  ROME = 'Europe/Rome',
  CET = 'Europe/Stockholm',
  AEST = 'Australia/Sydney',
  ZURICH = 'Europe/Zurich',
  BERLIN = 'Europe/Berlin',
  VIENNA = 'Europe/Vienna',
}

export interface CourseEvent {
  code: string
  startAt: moment.Moment
  duration: moment.Duration
  timezone: Timezone
  canBookInAdvanceFrom: moment.Duration
  location: Venue
  offer: Offer
  language: Language
  details: CourseDetails
  description: string
  eventbriteLogoId: string
}

interface CourseDetails {
  title: CourseName
  code: CourseCode
}

export function isVenueOnline(venue: Venue): boolean {
  return venue.name === Venues.Online.name
}

export const Venues = {
  Online: {
    address: null,
    city: null,
    country: null,
    countryCode: null,
    postcode: null,
    name: 'Online',
  },
  London: {
    name: 'CitizenM Hotel',
    address: '20 Lavington St',
    city: 'London',
    country: 'UK',
    countryCode: 'GB',
    postcode: 'SE1 0NZ',
  },
  Singapore: {
    name: 'JustCo Singapore',
    address: null,
    country: 'Singapore',
    countryCode: 'SG',
    city: 'Singapore',
    postcode: null,
  },
  Milan: {
    name: 'Milano',
    address: null,
    postcode: null,
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
  },
  SanFrancisco: {
    name: 'San Francisco',
    city: 'San Francisco',
    postcode: null,
    address: null,
    country: 'California',
    countryCode: 'US',
  },
  Cardiff: {
    name: 'Cardiff',
    city: 'Cardiff',
    postcode: null,
    address: null,
    country: 'Wales',
    countryCode: 'GB',
  },
  Toronto: {
    name: 'Toronto',
    city: 'Toronto',
    country: 'Canada',
    countryCode: 'CA',
    address: null,
    postcode: null,
  },
  TorontoGK: {
    name: 'Toronto Global Knowledge',
    city: 'Toronto',
    country: 'Canada',
    countryCode: 'CA',
    address: '2 Bloor Street East 31st Floor',
    postcode: 'M4W 1A8',
  },
  Stockholm: {
    name: 'Stockholm',
    city: 'Stockholm',
    country: 'Sweden',
    countryCode: 'SE',
    address: null,
    postcode: null,
  },
  Sydney: {
    name: 'Sydney',
    city: 'Sydney',
    country: 'Australia',
    countryCode: 'AU',
    address: null,
    postcode: null,
  },
  Zurich: {
    name: 'Zurich',
    city: 'Zurich',
    country: 'Switzerland',
    countryCode: 'CH',
    address: null,
    postcode: null,
  },
  Vienna: {
    name: 'Vienna',
    city: 'Vienna',
    country: 'Austria',
    countryCode: 'AT',
    address: null,
    postcode: null,
  },
  Munich: {
    name: 'Munich',
    city: 'Munich',
    country: 'Germany',
    countryCode: 'DE',
    address: null,
    postcode: null,
  },
  Berlin: {
    name: 'Berlin',
    city: 'Berlin',
    country: 'Germany',
    countryCode: 'DE',
    address: null,
    postcode: null,
  },
  HongKong: {
    name: 'Hong Kong',
    city: 'Hong Kong',
    country: 'Hong Kong',
    countryCode: 'HK',
    address: null,
    postcode: null,
  },
}
const AdvancedDetails = {
  title: CourseName.ADVANCED,
  code: CourseCode.ADVANCED,
}

interface KubernetesCourse {
  name: string
  code: CourseCode
  description: string
  events: CourseEvent[]
}

export const Courses: KubernetesCourse[] = [
  {
    name: 'Advanced Kubernetes training',
    code: CourseCode.ADVANCED,
    description: 'Learn how to deploy and scale applications with Kubernetes.',
    events: [
      {
        code: 'LK8S|MILAN|20190923',
        startAt: moment('2019-09-23T09:30:00+02:00'),
        timezone: Timezone.ROME,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Milan,
        offer: {
          price: 1500,
          currency: CurrencyCode.EUR,
          locale: 'it-IT',
        },
        language: Language.ITALIAN,
        description: marked(cat(`${__dirname}/description_it.md`).toString(), { renderer }),
        eventbriteLogoId: '53323631',
      },
      {
        code: 'LK8S|STOCKHOLM|20190923',
        startAt: moment('2019-09-23T09:30:00+02:00'),
        timezone: Timezone.ROME,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Stockholm,
        offer: {
          price: 23450,
          currency: CurrencyCode.SEK,
          locale: 'sv-SE',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|LONDON|20191002',
        startAt: moment('2019-10-02T09:30:00+01:00'),
        timezone: Timezone.LONDON,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Online,
        offer: {
          price: 1950,
          currency: CurrencyCode.GBP,
          locale: 'en-GB',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|SINGAPORE|20191009',
        startAt: moment('2019-10-07T09:30:00+08:00'),
        timezone: Timezone.SINGAPORE,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Singapore,
        offer: {
          price: 2550,
          currency: CurrencyCode.SGD,
          locale: 'en-SG',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|SANFRANCISCO|20191021',
        startAt: moment('2019-10-21T09:30:00-07:00'),
        timezone: Timezone.SAN_FRANCISCO,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.SanFrancisco,
        offer: {
          price: 2650,
          currency: CurrencyCode.USD,
          locale: 'en-US',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|SINGAPORE|20191127',
        startAt: moment('2019-11-27T09:30:00+08:00'),
        timezone: Timezone.SINGAPORE,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Singapore,
        offer: {
          price: 2550,
          currency: CurrencyCode.SGD,
          locale: 'en-SG',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|LONDON|20191202',
        startAt: moment('2019-12-02T09:30:00+00:00'),
        timezone: Timezone.LONDON,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.London,
        offer: {
          price: 1950,
          currency: CurrencyCode.GBP,
          locale: 'en-GB',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|SYDNEY|20191216',
        startAt: moment('2019-12-16T09:30:00+11:00'),
        timezone: Timezone.AEST,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Sydney,
        offer: {
          price: 2550,
          currency: CurrencyCode.AUD,
          locale: 'en-AU',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|TORONTO|20200129',
        startAt: moment('2020-01-29T09:30:00-05:00'),
        timezone: Timezone.TORONTO,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Toronto,
        offer: {
          price: 2850,
          currency: CurrencyCode.CAD,
          locale: 'en-AU',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|SANFRANCISCO|20200203',
        startAt: moment('2020-02-03T09:30:00-08:00'),
        timezone: Timezone.SAN_FRANCISCO,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.SanFrancisco,
        offer: {
          price: 2650,
          currency: CurrencyCode.USD,
          locale: 'en-US',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|ZURICH|20200210',
        startAt: moment('2020-02-10T09:30:00+01:00'),
        timezone: Timezone.ZURICH,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Zurich,
        offer: {
          price: 2800,
          currency: CurrencyCode.CHF,
          locale: 'de-CH',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|VIENNA|20200217',
        startAt: moment('2020-02-17T09:30:00+01:00'),
        timezone: Timezone.VIENNA,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Vienna,
        offer: {
          price: 1995,
          currency: CurrencyCode.EUR,
          locale: 'de-AT',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|SINGAPORE|20200217',
        startAt: moment('2020-02-17T09:30:00+08:00'),
        timezone: Timezone.SINGAPORE,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Singapore,
        offer: {
          price: 2550,
          currency: CurrencyCode.SGD,
          locale: 'en-SG',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|MUNICH|20200226',
        startAt: moment('2020-02-26T09:30:00+01:00'),
        timezone: Timezone.BERLIN,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Munich,
        offer: {
          price: 1995,
          currency: CurrencyCode.EUR,
          locale: 'de-DE',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|SYDNEY|20200304',
        startAt: moment('2020-03-04T09:30:00+11:00'),
        timezone: Timezone.AEST,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Sydney,
        offer: {
          price: 2550,
          currency: CurrencyCode.AUD,
          locale: 'en-AU',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|BERLIN|20200304',
        startAt: moment('2020-02-26T09:30:00+01:00'),
        timezone: Timezone.BERLIN,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Berlin,
        offer: {
          price: 1995,
          currency: CurrencyCode.EUR,
          locale: 'de-DE',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|LONDON|20200311',
        startAt: moment('2020-03-11T09:30:00+00:00'),
        timezone: Timezone.LONDON,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.London,
        offer: {
          price: 1950,
          currency: CurrencyCode.GBP,
          locale: 'en-GB',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|HONGKONG|20200311',
        startAt: moment('2020-03-11T09:30:00+08:00'),
        timezone: Timezone.HONG_KONG,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.HongKong,
        offer: {
          price: 14700,
          currency: CurrencyCode.HKD,
          locale: 'en-HK',
        },
        language: Language.ENGLISH,
        description: marked(cat(`${__dirname}/description_en.md`).toString(), { renderer }),
        eventbriteLogoId: '48505063',
      },
      {
        code: 'LK8S|MILAN|20190923',
        startAt: moment('2020-03-18T09:30:00+01:00'),
        timezone: Timezone.ROME,
        duration: moment.duration(3, 'days'),
        canBookInAdvanceFrom: moment.duration(90, 'days'),
        details: AdvancedDetails,
        location: Venues.Milan,
        offer: {
          price: 1500,
          currency: CurrencyCode.EUR,
          locale: 'it-IT',
        },
        language: Language.ITALIAN,
        description: marked(cat(`${__dirname}/description_it.md`).toString(), { renderer }),
        eventbriteLogoId: '53323631',
      },
    ],
  },
]
