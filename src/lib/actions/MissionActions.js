"use server"
import MissionSchema from "@/models/Mission";

export async function createOrUpdateMission(newData, id) {
    try {
        if (id) {
            await MissionSchema.findByIdAndUpdate(id, newData, { new: true });
        } else {
            await MissionSchema.create(newData);
        }
        return true
    } catch (e) {
        return false
    }

}

export async function deleteMission(id) {
    try {
        await MissionSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getMissions() {
    const list = await MissionSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}