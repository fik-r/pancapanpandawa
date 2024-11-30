"use server"
import MissionSchema from "@/models/Mission";

export async function createOrUpdateMission(newData, id) {
    if (id) {
        await MissionSchema.findByIdAndUpdate(id, newData, { new: true });
    } else {
        await MissionSchema.create(newData);
    }

}

export async function deleteMission(id) {
    await MissionSchema.deleteOne({ _id: id })
}

export async function getMissions() {
    const list = await MissionSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}