import { DIMENSTION, SentimentData } from '../model'
import { USERS, VOTES } from '../constants';

const getUsersGroupByDimenstion = (dimension: DIMENSTION) => {
  const usersGroupByDimenstion = new Map();
  USERS.forEach(user => {
    if (!usersGroupByDimenstion.get(user[dimension])) {
      usersGroupByDimenstion.set(user[dimension], new Map());
    }
    if(!usersGroupByDimenstion.get(user[dimension]).get('allUsers')) {
      usersGroupByDimenstion.get(user[dimension]).set('allUsers', []);
    }
    usersGroupByDimenstion.get(user[dimension]).get('allUsers').push(user.User);
  });
  return usersGroupByDimenstion;
}

const getSentimentsGroupedByDimenstion = (dimension: DIMENSTION) => {
  const sentimentsGroupByDimenstion =  getUsersGroupByDimenstion(dimension);
  sentimentsGroupByDimenstion.forEach((value) => {
    value.set('usersVoted', []);
    value.set('sentiments', 0);
    value.get('allUsers').forEach((user: string) => {
      VOTES.forEach(vote => {
        if(vote.userId === user) {
          if(value.get('usersVoted').indexOf(user) === -1) {
            value.get('usersVoted').push(user);
          }
          switch(vote.Vote) {
            case 5:
            case 4:
              value.set('sentiments', value.get('sentiments')+1);
              break;
            case 2:
            case 1:
              value.set('sentiments', value.get('sentiments')-1);
              break;
            default:
              break;
          }
        }
      })
    });
  });
  return sentimentsGroupByDimenstion;
}

export const getSentimentsData = (dimension: DIMENSTION) => {
  const sentimentsGroupByDimenstion = getSentimentsGroupedByDimenstion(dimension);
  const sentimentsData: SentimentData[] = [];
  sentimentsGroupByDimenstion.forEach((value, key) => {
    sentimentsData.push({
      segment: key,
      sentiment: value.get('sentiments'),
      percentage: value.get('usersVoted').length/value.get('allUsers').length*100
    });
  });
  return sentimentsData;
}

export const getOverAllScore = (sentimentData: SentimentData[]) => {
  let overAllScore = 0;
  sentimentData.map(data => overAllScore = overAllScore + data.sentiment);
  return overAllScore;
}