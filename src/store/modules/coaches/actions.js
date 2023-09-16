export default {
    async registerCoach(context, data)
    {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        };

        const response = await fetch(`http://localhost:5000/coaches/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(coachData),
        });

        console.log(response)

        // const data = await response.json();

        if(!response.ok)
            // error

        context.commit('registerCoach', {
            ...coachData,
            id: userId,
        });
    }
};